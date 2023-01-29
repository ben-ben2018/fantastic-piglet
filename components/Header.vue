<template>
  <header>
    <div class="header-content">
      <NuxtLink href="" class="logo">
        <img :src="daytimeLogo" class="logo-img" />
      </NuxtLink>
      <nav class="main-nav">
        <ul class="nav-list">
          <div class="phone-show-menu isResourceVisible"></div>
          <li class="main-nav-list">
            <ul class="phone-hide isResourceVisible">
              <li class="nav-item link-item" v-for="item in navList">
                {{ item }}
              </li>
            </ul>
          </li>
          <li>
            <ul class="search-add-ul">
              <li>
                <form action="" class="search-form">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="探索稀土掘金"
                  />
                  <div class="search-btn">
                    <img
                      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                      alt=""
                      class="search-icon"
                    />
                  </div>
                </form>
              </li>
              <li>
                <div class="add-group">
                  <button class="add-btn">写文章</button>
                </div>
              </li>
              <li>
                <div class="avatar-content">
                  <img
                    src="https://p3-passport.byteimg.com/img/mosaic-legacy/3797/2889309425~100x100.awebp"
                    alt=""
                    class="avatar"
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
const daytimeLogo =
    "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg",
  nightTimeLogo = daytimeLogo;
let navList = [
  "首页",
  "沸点",
  "课程",
  "直播",
  "活动",
  "竞赛",
  "商城",
  "APP",
  "插件",
];
</script>
<style scoped>
header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  z-index: 250;
  /* transform: translate3d(0, -100%, 0); */
}
.header-content {
  max-width: 1440px;
  display: flex;
  width: 100%;
  margin: auto;
  height: 5rem;
}

header .logo {
  margin-right: 1rem;
  margin-left: 24px;
  display: inline-block;
  height: 22px;
  width: auto;
  display: flex;
  align-items: center;
  height: 100%;
}
header .logo-img {
  display: block;
  width: 107px;
  height: 22px;
}
header .nav-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: row-reverse;
  height: 100%;
  margin: 0;
}
header .main-nav-list {
  display: flex;
  height: 100%;
  order: 99;
}
header .phone-hide {
  display: flex;
}
header .nav-item {
  color: #86909c;
  padding: 0 1rem;
  font-size: 1.167rem;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0);
}
header .route-active {
  color: #1e80ff;
  font-weight: 500;
}
header .nav-item:hover {
  border-bottom: 2px solid #1e80ff;
  color: #000;
}
header .search-add-ul {
  display: flex;
  justify-content: flex-start;
}
.search-form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  position: relative;
  height: 2.834rem;
  border: 1px solid #c2c8d1;
  transition: width 0.2s;
}
.search-input {
  border: none;
  width: calc(100% - 44px);
  padding: 0.6rem 0 0.6rem 1rem;
  box-shadow: none;
  outline: none;
  font-size: 1.1rem;
  color: #8a919f;
  background-color: transparent;
  transition: width 0.3s;
}
.search-btn {
  position: relative;
  left: -2px;
  width: 44px;
  height: 30px;
  background: #f2f3f5;
  border-radius: 2px;
}
.search-icon {
  display: inline-block;
  width: 1.33rem;
  padding: 0 0.8333rem 0 0;
  cursor: pointer;
  margin: 7px 15px;
}
.add-group {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 115px;
  height: 3rem;
}
.add-btn {
  padding: 0 1rem;
  font-size: 1.167rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  white-space: nowrap;
  height: 100%;
  border-radius: 3px;
  transition: background-color 0.1s linear 0.05s;
  border: none;
  background-color: #007fff;
  color: #fff;
}
.add-btn:hover {
  background-color: #1171ee;
}
.avatar-content {
  margin-right: 2rem;
}
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
}
/* @media (max-width: 1149px) {
  header .phone-hide {
    display: none;
    background-color: #fff;
    box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
    border: 1px solid #ebebeb;
    border-radius: 4px;
    font-size: 1.2rem;
  }
  .phone-show-menu {
    height: 5rem;
    display: flex;
    align-items: center;
    color: #1e80ff;
    font-size: 1.33rem;
    justify-content: center;
    padding: 0;
    width: 5.66rem;
  }
} */
</style>
