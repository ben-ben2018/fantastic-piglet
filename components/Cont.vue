<template>
  <div class="content-box">
    <div v-for="(c, index) in props.hs" class="line">
      <span @click="hideHeader(index)">{{ c.innerText }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  hs: Array,
});
function hideHeader(index) {
  //   useHeaderShow().value = false;
  if (process.client && window) {
    document.documentElement.scrollTop = props.hs[index].offsetTop;
  }
}
</script>

<style scoped>
.content-box {
  background-color: var(--articleBg);
}
.line {
  line-height: 28px;
  height: 44px;
  border-bottom: 1px solid var(--grayBorder);
  padding: 8px;
  box-sizing: border-box;
  color: var(--font-1);
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
