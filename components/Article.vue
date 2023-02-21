<template>
  <div class="article-box">
    <div class="article">
      <h1 class="article-title">{{ article.article.title }}</h1>
      <div class="author-info-block">
        <img :src="article.author.avatar" alt="" class="avatar" />
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
if (markdown) {
  let theme = markdown.match(/\<\!\-\-(.*?)\-\-\>/);
  if (theme) {
    let token = theme[1].trim().split(":");
    token[0] == "theme" ? loadTheme(token[1]) : null;
  }
}

let result = md.render(markdown);
let loadEmit = defineEmits(["loaded"]);
loadEmit("loaded", "");
</script>
<style scoped>
@import url(~/assets/style/Article/default.css);
</style>
