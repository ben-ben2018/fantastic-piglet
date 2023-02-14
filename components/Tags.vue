<template>
  <div class="tagNav">
    <div class="tagsList">
      <a v-for="tag in tags" class="tag">{{ tag }}</a>
    </div>
    <div class="setting">管理</div>
  </div>
</template>

<script setup>
let tags = [
  "综合",
  "关注",
  "后端",
  "前端",
  "Android",
  "iOS",
  "人工智能",
  "开发工具",
  "代码人生",
  "阅读",
];
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
