<template>
  <div class="main-area">
    <div class="article-area">
      <Article></Article>
      <BookCard></BookCard>
    </div>
    <div class="sidebar"></div>
  </div>
</template>
<script setup>
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
</script>
<style scoped>
.main-area {
  display: flex;
  padding: 0 0 8rem;
}
.article-area {
  width: 820px;
  background-color: var(--articleBg);
  border-radius: 4px 4px 0 0;
}
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
}
</style>
