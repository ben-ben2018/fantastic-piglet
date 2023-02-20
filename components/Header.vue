<template>
  <header>
    <div class="header-content">
      <NuxtLink href="" class="logo">
        <img :src="daytimeLogo" class="logo-img" />{{ useWidth.sizeType }}
      </NuxtLink>
      <nav class="main-nav">
        <ul class="nav-list">
          <div class="phone-show-menu isResourceVisible" @click="showNav">
            首页
            <svg
              t="1675069336150"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2026"
              width="25"
              height="25"
            >
              <path
                d="M735.136 405.28 512 636 288.864 405.28Z"
                p-id="2027"
                class="icon"
              ></path>
            </svg>
          </div>
          <li class="main-nav-list">
            <ul
              class="phone-hide isResourceVisible"
              v-show="navShowState && useWidth.sizeType <= 1"
            >
              <li
                class="nav-item link-item"
                v-for="item in navList"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </li>
          <li>
            <ul class="search-add-ul">
              <li class="search-li">
                <form
                  action=""
                  :class="{
                    'search-form': true,
                    'search-form-active': isSearch,
                  }"
                >
                  <input
                    type="text"
                    class="search-input"
                    placeholder="探索稀土掘金"
                    @focus="changeIsSearch(true)"
                    @focusout="changeIsSearch(false)"
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
              <li v-show="useWidth.sizeType != 4">
                <div
                  :class="{
                    'add-group': true,
                    'add-group-hide': isSearch && useWidth.sizeType == 1,
                  }"
                >
                  <button class="add-btn">写文章</button>
                </div>
              </li>
              <li>
                <div class="avatar-content" @click="changeTheme">
                  <img
                    src="https://p3-passport.byteimg.com/img/mosaic-legacy/3797/2889309425~100x100.awebp"
                    alt=""
                    class="avatar"
                  />
                </div>
              </li>
              <li v-show="useWidth.sizeType != 4">
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
const daytimeLogo = ref(""),
  nightTimeLogo = "./jjDark.svg";
let useWidth = useWindowWidth();
let isSearch = ref(false);
function changeIsSearch(state) {
  // console.log(useWidth.value.sizeType);
  if (useWidth.value.sizeType != 4) {
    isSearch.value = state;
  }
}
function logoImg() {
  // console.log(useWidth.value.sizeType);
  if (useWidth.value.sizeType == 4) {
    daytimeLogo.value =
      "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg";
  } else {
    const darkMode = useDarkMode();
    if (
      (darkMode.value && darkMode.value == "true") ||
      localStorage.getItem("useDark")
    ) {
      daytimeLogo.value = "../jjDark.svg";
    } else {
      daytimeLogo.value = "../jjLight.svg";
    }
  }
}
setTimeout(logoImg, 100);

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

let navShowState = ref(false);
function showNav() {
  navShowState.value = !navShowState.value;
}

function changeTheme() {
  if (process.client) {
    let currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme == "dark") {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("useDark", "");
      daytimeLogo.value = "../jjLight.svg";
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("useDark", "1");
      daytimeLogo.value = "../jjDark.svg";
    }
  }
}
</script>
<style scoped>
@import url(~/assets/style/header/default.css);
@import url(~/assets/style/header/phone.css);
</style>
