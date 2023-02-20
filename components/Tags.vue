<template>
  <div class="tagNav">
    <div class="tagsList">
      <a v-for="tag in tags" class="tag" @click="useTag(tag.attributes.name)">{{
        tag.attributes.name
      }}</a>
    </div>
    <div class="setting">管理</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/getTypes");
let tags = data.value;
let loadEmit = defineEmits(["loadRead"]);
function useTag(tag) {
  loadEmit("loadRead", "/" + tag);
}
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
