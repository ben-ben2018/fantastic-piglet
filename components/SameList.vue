<template>
  <div class="same-list">
    <div class="line-title">
      <span>推荐阅读</span>
    </div>
    <NuxtLink v-for="(c, index) in data" :key="index" :to="'/read/' + c.id">
      <div class="line">
        <span>{{ c.attributes.title }}</span>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
let path = `/api/getList/?type=前端&page=1&sort=hot`;
const { data } = await useFetch(path);
let sameLists = [];
</script>
<style scoped>
.same-list {
  color: var(--font-1);
  background-color: var(--articleBg);
  margin-top: 20px;
}
.line {
  line-height: 28px;
  height: 44px;
  border-bottom: 1px solid var(--grayBorder);
  padding: 8px;
  box-sizing: border-box;
  color: var(--font-1);
}
.line-title {
  padding: 1.333rem 0;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  color: var(--font-1);
  font-weight: 500;
  border-bottom: 1px solid #e4e6eb;
}
.active::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  margin-top: 10px;
  width: 4px;
  height: 16px;
  background: var(--main);
  border-radius: 0 4px 4px 0;
}

.active {
  color: var(--main);
}
.line:hover {
  color: var(--main);
}
</style>
