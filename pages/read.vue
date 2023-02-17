<template>
  <div class="main-area">
    <div class="article-area">
      <div class="article-main">
        <Article></Article>
        <BookCard></BookCard>
      </div>
      <div class="sidebar">
        <User></User>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  // script: [{ children: "console.log('Hello world')" }],
});
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
  top: 0;
  position: absolute;
}
</style>
