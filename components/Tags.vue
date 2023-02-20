<template>
  <div class="tagNav">
    <div class="tagsList">
      <a v-for="tag in tags" class="tag">{{ tag.attributes.name }}</a>
    </div>
    <div class="setting">管理</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/getTypes");
console.log(data.value);
let tags = data.value;
</script>

<style scoped>
@import url(~/assets/style/tags/default.css);
@import url(~/assets/style/tags/phone.css);
</style>
