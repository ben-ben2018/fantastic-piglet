<template>
  <div class="wrap category-course-recommend">
    <div class="title">相关小册</div>
    <div class="list">
      <div class="book-card-wrap" v-for="item in books">
        <div class="book-thumb book-card-cover">
          <img
            :src="item.img.url"
            :alt="item.img.alt"
            class="lazy book-thumb-img"
            loading="lazy"
            style=""
          />
        </div>
        <div class="book-card-info">
          <div class="book-card-top">
            <div :title="item.title" class="book-card-title">
              <div class="book-card-vip">VIP</div>
              <span class="book-card-title-text">{{ item.text }}</span>
            </div>
            <div class="book-card-content">
              <a target="_blank" rel="" class="username author-name"
                ><span class="name" style="max-width: 128px">
                  {{ item.author }}
                </span>
                <!---->
              </a>
              <div class="book-card-count">{{ item.count }}购买</div>
            </div>
          </div>
          <div class="book-card-price-wrap">
            <div class="book-card-price">¥{{ item.price }}</div>
            <div class="sale-tooltip-entry-box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let book = {
  img: {
    url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efc786baa161436f9faa0aaa62158d6f~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp",
    alt: "「CEF 桌面软件开发实战」封面",
  },
  title: "CEF 桌面软件开发实战",
  count: 725,
  price: 29.9,
  text: "基于 Stencil 构建 Web Components 组件库",
  author: "Super_x",
  vip: true,
};
let books = [book, book];
</script>
<style scoped>
@import url(~/assets/style/bookCard/default.css);
@import url(~/assets/style/bookCard/phone.css);
</style>
