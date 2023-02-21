<template>
  <div class="main-area">
    <div class="article-area">
      <div class="article-main">
        <Article :attributes="attributes" @loaded="loadContent"></Article>
        <BookCard></BookCard>
      </div>
      <div class="sidebar">
        <!-- <User></User> -->
        <div class="fixed-bar">
          <Cont :cont="contents" :hs="hs"></Cont>
          <SameList></SameList>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { debounce } from "~/assets/js/tool";
const route = useRoute();
const { data } = await useFetch(
  "/api/getRead/?id=" + route.path.split("/").pop()
);
let attributes = data.value;
console.log(attributes, attributes.title);
useHead({
  title: attributes.title,
  meta: [
    { name: "description", content: attributes.title },
    { name: "renderer", content: "webkit" },
    { name: "force-rendering", content: "webkit" },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=Edge,chrome=1",
    },
  ],
  bodyAttrs: {
    // class: "test",
  },
  script: [
    {
      // children: `console.log(666)`,
    },
  ],
});
let contents = ref([]);
let hs = reactive([]);
let scrollTop = 0;
function loadContent() {
  if (process.client && window) {
    nextTick(() => {
      hs = [...document.querySelectorAll("[data-h1]")];
      contents.value = [...hs].map((a) => {
        return { text: a.innerText };
      });
    });
    let oldScroll = 0;
    window.onscroll = function () {
      function check() {
        scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < oldScroll || scrollTop == 0) {
          useHeaderShow().value = true;
        } else {
          useHeaderShow().value = false;
        }
        oldScroll = scrollTop;
      }
      check();
      // debounce(check, 20);
    };
  }
}
</script>
<style scoped>
.main-area {
  display: flex;
}
.article-area {
  width: 1000px;
  border-radius: 4px 4px 0 0;
  margin: 0 auto 99px;
  position: relative;
}
.article-main {
  background-color: var(--bg);
  width: 75%;
}
.sidebar {
  width: 23%;
  right: 0;
  top: 0px;
  position: absolute;
}
.fixed-bar {
  position: fixed;
  width: 20%;
  height: calc(100vh - 80px);
  overflow: auto;
  background-color: var(--htmlbg);
}
</style>
