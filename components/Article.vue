<template>
  <div class="article">
    <h1 class="article-title">{{ article.article.title }}</h1>
    <div class="author-info-block">
      <img src="" alt="" class="avatar" />
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
      <div class="markdown-body" v-html="instyle + result"></div>
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
            <span class="tag-title">{{ item.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MarkdownIt from "markdown-it";
let md = new MarkdownIt();
let article = {
  author: { name: "", avatar: "" },
  tag: { type: { name: "", url: "" }, tags: [{ name: "", url: "" }] },
  article: {
    md: "",
    title: "",
    views: 700,
    time: "",
  },
};
let testMd = `# qqrobot
## 基于go-cqhttp的qq机器人

## 环境安装

**安装 python3.8以上版本**

安装依赖

~~~python
pip install flask
pip install requests
~~~`;
md.core.ruler.push("show-line", (state) => {
  // forEach 遍历 tokens
  state.tokens.forEach((token) => {
    // token.map 即所在的行数
    console.log(token);
    let h1Num = 0;
    if (token.tag == "h1") {
      token.attrs = token.attrs || [];
      token.attrs.push(["data-h1", h1Num++]);
    }
    if (token.map) {
      token.attrs = token.attrs || [];
      token.attrs.push([]);
    }
  });
  return true;
});

let result = md.render(testMd);
let instyle = `<style>@charset "UTF-8";.markdown-body{word-break:break-word;line-height:2;font-weight:400;font-size:15px;overflow-x:hidden;color:#333;letter-spacing:1.2px}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1:first-child,.markdown-body h2:first-child,.markdown-body h3:first-child,.markdown-body h4:first-child,.markdown-body h5:first-child,.markdown-body h6:first-child{margin-top:-1.5rem;margin-bottom:1rem}.markdown-body h1:before,.markdown-body h2:before,.markdown-body h3:before,.markdown-body h4:before,.markdown-body h5:before,.markdown-body h6:before{content:"#";display:inline-block;color:#3eaf7c;padding-right:.23em}.markdown-body h1{position:relative;font-size:2.5rem;margin-bottom:5px}.markdown-body h1:before{font-size:2.5rem}.markdown-body h2{padding-bottom:.5rem;font-size:2.2rem;border-bottom:1px solid #ececec}.markdown-body h3{font-size:1.5rem;padding-bottom:0}.markdown-body h4{font-size:1.25rem}.markdown-body h5{font-size:1rem}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body strong{color:#3eaf7c}.markdown-body img{max-width:100%;border-radius:2px;display:block;margin:auto}.markdown-body hr{border:none;border-top:1px solid #3eaf7c;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;overflow-x:auto;padding:.2rem .5rem;margin:0;color:#3eaf7c;font-size:.85em;background-color:rgba(27,31,35,.05);border-radius:3px}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75;border:.5rem solid #3eaf7c}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{font-weight:500;text-decoration:none;color:#3eaf7c;margin:0 5px}.markdown-body a:active,.markdown-body a:hover{text-decoration:none;border-bottom:1.5px solid #3eaf7c}.markdown-body a[href^=http]:after{content:url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik04MzIgMTI4SDY0MHY2NGgxNDYuNzUyTDUyMS4zNzYgNDU3LjM3Nmw0NS4yNDggNDUuMjQ4TDgzMiAyMzcuMjQ4VjM4NGg2NFYxMjh6IiBmaWxsPSIjM2VhZjdjIi8+PHBhdGggZD0iTTc2OCA4MzJIMTkyVjI1NmgzNTJ2LTY0SDE2MGEzMiAzMiAwIDAwLTMyIDMydjY0MGEzMiAzMiAwIDAwMzIgMzJoNjQwYTMyIDMyIDAgMDAzMi0zMlY0ODBoLTY0djM1MnoiIGZpbGw9IiMzZWFmN2MiLz48L3N2Zz4=");margin-left:2px}.markdown-body a[href^="#"]:before{content:"#"}.markdown-body table{display:inline-block!important;font-size:13px;width:auto;max-width:100%;overflow:auto;border:1px solid #3eaf7c;border-collapse:collapse}.markdown-body thead{background:#3eaf7c;color:#fff;text-align:left}.markdown-body tr:nth-child(2n){background-color:rgba(153,255,188,.1)}.markdown-body td,.markdown-body th{padding:4px 8px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#7b7878;padding:1px 23px;border-left:.5rem solid;border-color:#42b983;background-color:rgba(66,184,131,.1);position:relative;margin:14px 8px 0}.markdown-body blockquote:before{display:inline-block;position:absolute;content:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNyAyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjg2MiAxLjg2MikiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PGNpcmNsZSBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS43MjQiIGZpbGw9IiM0MkI5ODMiIGN4PSIxMS42MzgiIGN5PSIxMS42MzgiIHI9IjExLjYzOCIvPjxwYXRoIGQ9Ik0xNC45NzggNi4yN0E1LjAwNiA1LjAwNiAwIDAwNi42NyA5LjQ2OGE0LjkwMSA0LjkwMSAwIDAwMS43NzMgNC4zNjJjLjMyMy4yNTguNTE0LjY0Ny41MjIgMS4wNnYxLjA2YTIuNjg1IDIuNjg1IDAgMDA1LjM3IDB2LTEuMDA4Yy4wMDItLjM5OC4xNzMtLjc3Ny40Ny0xLjA0MmE1LjAyMyA1LjAyMyAwIDAwLjE3My03LjYzem0tMy4zMzcgMTAuOTY3YTEuMzA0IDEuMzA0IDAgMDEtMS4yODYtMS4yODd2LS4yNzhoMi41NzJ2LjI2MWMwIC43MTMtLjU3MyAxLjI5NC0xLjI4NiAxLjMwNHptMi4yNi00LjQxNWMtLjQ0LjM4My0uNzUuODkzLS44ODcgMS40NmgtMi43NDZhMi44NjggMi44NjggMCAwMC0uOTM4LTEuNTNoLS4wMThhMy40NzYgMy40NzYgMCAwMS0xLjI2OS0zLjE0NSAzLjYxNSAzLjYxNSAwIDAxNy4xOTYuNCAzLjY1IDMuNjUgMCAwMS0xLjMzOCAyLjgxNXoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+");width:25px;height:25px;left:-16px;top:12px}.markdown-body blockquote>p{margin:10px 0}.markdown-body details{outline:none;border:none;border-left:4px solid #3eaf7c;padding-left:10px;margin-left:4px}.markdown-body details summary{cursor:pointer;border:none;outline:none;background:#fff;margin:0 -17px}.markdown-body details summary::-webkit-details-marker{color:#3eaf7c}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body ol li::marker{color:#3eaf7c}.markdown-body ul li{list-style:none;padding-left:10px}.markdown-body ul li::marker{content:"•";color:#3eaf7c}.markdown-body ul li.task-list-item:before{content:"";margin-right:0}.markdown-body input[type=checkbox]{vertical-align:text-bottom;box-shadow:inset 0 0 0 10px #fff}.markdown-body input[type=checkbox]:before{content:url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik04NzcuMDU2IDE0Ni45NDR2NzMwLjExMkgxNDYuOTQ0VjE0Ni45NDRoNzMwLjExMnptMC0xMDQuMjc3SDE0Ni45NDRjLTU3LjYyOCAwLTEwNC4yNzcgNDYuNjQ5LTEwNC4yNzcgMTA0LjI3N3Y3MzAuMTEyYzAgNTcuNjI4IDQ2LjY0OSAxMDQuMjc3IDEwNC4yNzcgMTA0LjI3N2g3MzAuMTEyYzU3LjYyOCAwIDEwNC4yNzctNDYuNjQ5IDEwNC4yNzctMTA0LjI3N1YxNDYuOTQ0YzAtNTcuNjI4LTQ2LjY0OS0xMDQuMjc3LTEwNC4yNzctMTA0LjI3N3oiIGZpbGw9IiMzZWFmN2MiLz48L3N2Zz4=");position:relative;top:-2px;right:2px}.markdown-body input[type=checkbox]:checked:before{content:url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik05MTAuMjA4IDBIMTEzLjc2QTExNC4xMTIgMTE0LjExMiAwIDAwLS4wMzIgMTEzLjc5MlY5MTAuMjRjMCA2Mi41OTIgNTEuMiAxMTMuNzkyIDExMy43OTIgMTEzLjc5Mmg3OTYuNDQ4YzYyLjU5MiAwIDExMy43OTItNTEuMiAxMTMuNzkyLTExMy43OTJWMTEzLjc5MkMxMDI0IDUxLjIgOTcyLjggMCA5MTAuMjA4IDB6bS01MTIgNzk2LjQ0OEwxMTMuNzYgNTEybDc5LjY0OC03OS42NDggMjA0LjggMjA0LjhMODMwLjU2IDIwNC44bDc5LjY0OCA3OS42NDgtNTEyIDUxMnoiIGZpbGw9IiMzZWFmN2MiLz48L3N2Zz4=");position:relative;top:-2px;right:2px}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style>`;
// console.log(result);
</script>
<style scoped>
.article {
  padding: 1.5rem;
}
.article-title {
  margin: 0 0 1.667rem;
  font-size: 2.667rem;
  font-weight: 600;
  line-height: 1.31;
  color: var(--font-1);
}
.author-info-block {
  display: flex;
  align-items: center;
  margin-bottom: 1.667rem;
}
.avatar {
  margin-right: 1rem;
  width: 3.333rem;
  height: 3.333rem;
  border-radius: 50%;
}
.author-info-box {
  min-width: 0;
  flex: 1;
  min-height: 43px;
}
.author-info-block .author-name {
  height: 2rem;
  display: flex;
  align-items: center;
  color: var(--font-1);
}
.meta-box {
  font-size: 1.167rem;
  color: var(--font-3);
  margin-top: 2px;
  line-height: 22px;
}

.article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 3.33rem;
}
.tag-list-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: -12px;
}
.tag-list {
  display: flex;
  font-size: 1.167rem;
  line-height: 2.286;
}
.tag-list-box .tag-list .tag-list-title {
  flex-shrink: 0;
  margin-right: 8px;
  font-size: 14px;
  color: var(--font-1);
}
.tag-list-box .tag-list .item {
  display: flex;
  align-items: center;
  margin: 0 0.667rem 1rem 0;
  padding: 0 1rem;
  border-radius: 4px;
  transition: background-color 0.15s linear;
}
.tag-list-box .tag-list .item.category-item {
  background-color: var(--bg);
  color: var(--font-3);
}
.tag-list-box .tag-list .tag-title {
  white-space: nowrap;
  line-height: 2.667rem;
}
.tag-list-box .tag-list .tag-list-container {
  display: flex;
  flex-wrap: wrap;
}
.tag-list-box .tag-list .item.tag-item {
  background-color: var(--bg);
  color: #1e80ff;
}
.articleBody,
.markdown-body {
  color: var(--font-1);
}
</style>
