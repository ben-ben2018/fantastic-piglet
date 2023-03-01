<template>
  <div class="article-box">
    <div class="article">
      <h1 class="article-title">{{ article.article.title }}</h1>
      <div class="author-info-block">
        <img
          :src="article.author.avatar"
          :alt="article.article.title"
          class="avatar"
        />
        <div class="author-info-box">
          <div class="author-name">
            <span class="name" style="max-width: 128px">
              {{ article.author.name }}
            </span>
          </div>
          <div class="meta-box">
            <time :datetime="article.article.time" class="time">
              {{ article.article.time }}
            </time>
            <span class="views-count">
              ·&nbsp;&nbsp;阅读 {{ article.article.views }}
            </span>
          </div>
        </div>
      </div>

      <div class="articleBody">
        <div v-html="instyle"></div>
        <div class="markdown-body" v-html="result"></div>
      </div>
    </div>
    <div class="article-end">
      <div class="tag-list-box">
        <div class="tag-list">
          <div class="tag-list-title">分类：</div>
          <NuxtLink class="item category-item">
            <span class="tag-title">{{ article.tag.type.name }}</span>
          </NuxtLink>
        </div>
        <div class="tag-list">
          <div class="tag-list-title">标签：</div>
          <div class="tag-list-container">
            <NuxtLink class="item tag-item" v-for="item in article.tag.tags">
              <span class="tag-title">{{ item }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { toRefs, defineProps } from "vue";
import MarkdownIt from "markdown-it";
const props = defineProps({
  attributes: Object,
});
let info = props.attributes;
// console.log(info);
let userinfo = info.author;
let instyle = ref("");
let md = new MarkdownIt();
md.block.ruler.before(
  "paragraph",
  "myplugin",
  function (state, startLine, endLine) {
    let ch,
      level,
      tmp,
      token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x40 /*@*/ || pos >= max) {
      return false;
    }

    let text = state.src.substring(pos, max);
    let rg = /^\@jcode\((.*)\)/;
    let match = text.match(rg);

    if (match && match.length) {
      let result = match[1];
      token = state.push("heading_open", "iframe", 1);
      token.markup = "@";
      token.map = [startLine, state.line];
      token.attrSet("src", result);
      token.attrSet("class", "jcode");
      token = state.push("inline", "", 0);
      console.log(ch, token);

      // token.content = result;
      token.map = [startLine, state.line];
      token.children = [];

      token = state.push("heading_close", "iframe", -1);
      token.markup = "@";

      state.line = startLine + 1;

      return true;
    }
  }
);

let article = {
  author: {
    name: userinfo.user_name,
    avatar: baseUrl + userinfo.avatar_large2.data.attributes.url,
  },
  tag: {
    type: { name: info.tag.data.attributes.name, url: "" },
    tags: info.tags,
  },
  article: {
    md: info.content,
    title: info.title,
    views: info.views,
    time: info.updatedAt,
  },
};
// console.log(info);
md.core.ruler.push("show-line", (state) => {
  // forEach 遍历 tokens
  state.tokens.forEach((token) => {
    // token.map 即所在的行数
    // console.log(token);
    let h1Num = 0;
    if (token.tag == "h1") {
      token.attrs = token.attrs || [];
      token.attrs.push(["data-h1", h1Num]);
      token.attrs.push(["id", "h" + h1Num]);
      h1Num++;
      // content().value.push()
    }
    // if (token.map) {
    //   token.attrs = token.attrs || [];
    //   token.attrs.push([]);
    // }
  });
  return true;
});
function loadTheme(theme) {
  instyle.value = themeList[theme];
}
let markdown = article.article.md;
let otherRelus = [
  {
    relu: /\<\!\-\-(.*?)theme:(.*?)\-\-\>/,
    fn: loadTheme,
    attr: 2,
    handle: ["trim"],
  },
  // {
  //   relu: /\[jcode\]\((.*?)\)/,
  //   fn: loadTheme,
  //   attr: 2,
  //   handle: ["trim"],
  // },
];
if (markdown) {
  for (let rule of otherRelus) {
    let token = markdown.match(rule.relu);
    if (!token) {
      continue;
    }
    rule.fn(token[rule.attr][rule.handle]());
  }
}

let result = md.render(markdown);
let loadEmit = defineEmits(["loaded"]);
loadEmit("loaded", "");
if (process.client) {
  document.addEventListener("copy", function (event) {
    let clipboardData = event.clipboardData || window.clipboardData;
    if (!clipboardData) {
      return;
    }
    let text = window.getSelection().toString();
    if (text) {
      event.preventDefault();
      clipboardData.setData(
        "text/plain",
        text +
          `\n\n-----------
          作者：${userinfo.user_name}
          链接：${location.href}
          来源：稀土掘金
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`
      );
    }
  });
}
</script>
<style scoped>
@import url(~/assets/style/Article/default.css);
</style>
