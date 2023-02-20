<template>
  <div class="tagNav">
    <div class="tagsList">
      <a class="tag" @click="useSort('new')">最新</a>
      <a class="tag" @click="useSort('hot')">最热</a>
    </div>
  </div>
</template>

<script setup>
let loadEmit = defineEmits(["loadSort"]);
function useSort(tag) {
  nowTag.value = tag;
  loadEmit("loadSort", "/" + tag, 1, true);
}
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
