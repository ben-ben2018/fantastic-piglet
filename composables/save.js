const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const mkdirp = require("mkdirp");
const homeUrl = "http://127.0.0.1:3000";
const set = new Set([homeUrl]);
function grab(url) {
  if (!url) return;
  url = url.trim();
  if (url.endsWith("/")) {
    url += "index.html";
  }
  const chunks = [];
  request(encodeURI(url))
    .on("error", (e) => {
      console.log(e);
    })
    .on("data", (chunk) => {
      chunks.push(chunk);
    })
    .on("end", () => {
      const html = Buffer.concat(chunks).toString();
      if (!html) return;
      let { host, origin, pathname } = new URL(url);
      pathname = decodeURI(pathname);
      const $ = cheerio.load(html);
      const dir = path.dirname(pathname);
      mkdirp.sync(path.join(__dirname, dir));
      fs.writeFile(path.join(__dirname, pathname), html, "utf-8", (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`[${url}]保存成功`);
      });
      const aTags = $("a");
      Array.from(aTags).forEach((aTag) => {
        const href = $(aTag).attr("href");
        if (!href) return;
        if (href.startsWith("#")) return;
        if (href.startsWith("mailto:")) return;
        // if (/\.(jpg|jpeg|png|gif|bit)$/.test(href)) return;
        let reg = new RegExp(`^https?:\/\/${host}`);
        if (/^https?:\/\//.test(href) && !reg.test(href)) return;
        let newUrl = "";
        if (/^https?:\/\//.test(href)) {
          newUrl = href;
        } else {
          newUrl = origin + path.join(dir, href);
        }
        if (set.has(newUrl)) return;
        if (newUrl.endsWith("/") && set.has(newUrl + "index.html")) return;
        if (newUrl.endsWith("/")) newUrl += "index.html";
        set.add(newUrl);
        grab(newUrl);
      });
    });
}
grab(homeUrl);
