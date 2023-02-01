<template>
  <div class="article">
    <h1 class="article-title">666</h1>
    <div class="author-info-block">
      <img src="" alt="" class="avatar" />
      <div class="author-info-box">
        <div class="author-name">
          <span class="name" style="max-width: 128px"> zhoulx </span>
        </div>
        <div class="meta-box">
          <time
            datetime="2023-01-31T02:51:05.000Z"
            title="Tue Jan 31 2023 10:51:05 GMT+0800 (China Standard Time)"
            class="time"
          >
            2023年01月31日 10:51
          </time>
          <span class="views-count"> ·&nbsp;&nbsp;阅读 450 </span>
          <!---->
        </div>
      </div>
    </div>

    <div class="articleBody"></div>
  </div>
  <div class="article-end">
    <div class="tag-list-box">
      <div class="tag-list">
        <div class="tag-list-title">分类：</div>
        <a href="/frontend" target="_blank" rel="" class="item category-item"
          ><span class="tag-title">前端</span></a
        >
      </div>
      <div class="tag-list">
        <div class="tag-list-title">标签：</div>
        <div class="tag-list-container">
          <a
            href="/tag/%E5%89%8D%E7%AB%AF"
            target="_blank"
            rel=""
            class="item tag-item"
            ><span class="tag-title">前端</span></a
          ><a
            href="/tag/JavaScript"
            target="_blank"
            rel=""
            class="item tag-item"
            ><span class="tag-title">JavaScript</span></a
          ><a
            href="/tag/TypeScript"
            target="_blank"
            rel=""
            class="item tag-item"
            ><span class="tag-title">TypeScript</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article {
  padding: 1.5rem;
}
.article-title {
  margin: 0 0 1.667rem;
  font-size: 2.667rem;
  font-weight: 600;
  line-height: 1.31;
  color: #252933;
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
}
.meta-box {
  font-size: 1.167rem;
  color: #8a919f;
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
  color: #515767;
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
  background-color: #f2f3f5;
  color: #515767;
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
  background-color: #eaf2ff;
  color: #1e80ff;
}
</style>
