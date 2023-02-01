<template>
  <div class="wrap category-course-recommend">
    <div class="title">相关小册</div>
    <div class="list">
      <div class="book-card-wrap">
        <div class="book-thumb book-card-cover">
          <img
            src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efc786baa161436f9faa0aaa62158d6f~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp?"
            alt="「基于 Stencil 构建 Web Components 组件库」封面"
            class="lazy book-thumb-img"
            loading="lazy"
            style=""
          />
        </div>
        <div class="book-card-info">
          <div class="book-card-top">
            <div
              title="基于 Stencil 构建 Web Components 组件库"
              class="book-card-title"
            >
              <div class="book-card-vip">VIP</div>
              <span class="book-card-title-text"
                >基于 Stencil 构建 Web Components 组件库</span
              >
            </div>
            <div class="book-card-content">
              <a target="_blank" rel="" class="username author-name"
                ><span class="name" style="max-width: 128px"> Super_x </span>
                <!---->
              </a>
              <div class="book-card-count">752购买</div>
            </div>
          </div>
          <div class="book-card-price-wrap">
            <div class="book-card-price">¥29.9</div>
            <div class="sale-tooltip-entry-box"></div>
          </div>
        </div>
      </div>
      <div class="book-card-wrap">
        <div class="book-thumb book-card-cover">
          <img
            src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25d4cb07852f477291299ebbaa2ca092~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp?"
            alt="「CEF 桌面软件开发实战」封面"
            class="lazy book-thumb-img"
            loading="lazy"
            style=""
          />
        </div>
        <div class="book-card-info">
          <div class="book-card-top">
            <div title="CEF 桌面软件开发实战" class="book-card-title">
              <div class="book-card-vip">VIP</div>
              <span class="book-card-title-text">CEF 桌面软件开发实战</span>
            </div>
            <div class="book-card-content">
              <a target="_blank" rel="" class="username author-name"
                ><span class="name" style="max-width: 128px">
                  刘晓伦liulun
                </span>
              </a>
              <div class="book-card-count">612购买</div>
            </div>
          </div>
          <div class="book-card-price-wrap">
            <div class="book-card-price">¥29.9</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.warp {
  border-radius: 4px;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
}
.title {
  color: var(--juejin-font-1);
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 20px;
}
.list {
  display: grid;
  grid-template-columns: repeat(2, 370px);
  grid-gap: 16px;
}
.book-card-wrap {
  display: flex;
  flex-direction: row;
  width: 370px;
  border: 1px solid var(--juejin-layer-loading-start);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  cursor: pointer;
  overflow: hidden;
}

.book-card-cover {
  width: 80px;
  height: 112px;
  margin-right: 12px;
}
.book-thumb {
  position: relative;
  overflow: hidden;
  background-color: var(--juejin-layer-loading-end);
  border-radius: 4px;
}
.book-thumb .book-thumb-img {
  display: block;
  height: 100%;
  width: 100%;
}
.book-card-info {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: calc(100% - 92px);
}
.book-card-top {
  min-height: 90px;
}
.book-card-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--juejin-font-1);
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 8px;
}
.book-card-vip {
  vertical-align: middle;
}
.book-card-vip {
  display: inline-block;
  margin-right: 6px;
  color: var(--juejin-font_golden_4);
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  padding: 0 8px;
  background: linear-gradient(90deg, #fde8c3, #edd3a7);
  border-radius: 3px;
}
.book-card-price-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.book-card-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.username {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--juejin-font-1);
  display: flex;
  align-items: center;
}
.author-name .name {
  max-width: 84px;
  color: var(--juejin-font-1);
  font-size: 14px;
  font-weight: 400;
}
.book-card-count {
  color: var(--juejin-font-3);
  font-size: 12px;
}
.book-card-price {
  color: var(--juejin-danger-1-normal);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
</style>
