<template>
  <div class="tagNav">
    <div class="tagsList">
      <a
        :class="{ tag: true, active: nowSort == 'new' }"
        @click="useSort('new')"
        >最新</a
      >
      <a
        :class="{ tag: true, active: nowSort == 'hot' }"
        @click="useSort('hot')"
        >最热</a
      >
    </div>
  </div>
</template>

<script setup>
let nowSort = ref("how");
let loadEmit = defineEmits(["loadSort"]);
function useSort(tag) {
  nowSort.value = tag;
  loadEmit("loadSort", null, 1, tag, true);
}
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
