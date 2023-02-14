<template>
  <div class="tagNav">
    <div class="tagsList">
      <a v-for="tag in tags" class="tag">{{ tag }}</a>
    </div>
  </div>
</template>

<script setup>
let tags = ["推荐", "最新", "热榜"];
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
