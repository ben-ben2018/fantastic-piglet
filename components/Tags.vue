<template>
  <div class="tagNav">
    <div class="tagsList">
      <a
        v-for="tag in tags"
        :class="{ tag: true, active: tag.attributes.name == nowTag }"
        @click="useTag(tag.attributes.name)"
        >{{ tag.attributes.name }}</a
      >
    </div>
    <!-- <div class="setting">管理</div> -->
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/getTypes");
let tags = data.value,
  nowTag = ref("综合");
let loadEmit = defineEmits(["loadRead"]);
function useTag(tag) {
  nowTag.value = tag;
  loadEmit("loadRead", "/" + tag, 1, null, true);
}
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
