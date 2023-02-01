<template>
  <!-- <Head></Head> -->
  <div>
    <NuxtLayout> <NuxtPage></NuxtPage></NuxtLayout>
  </div>
</template>
<script setup>
import { debounce } from "~/assets/js/tool";

let useWidth = useWindowWidth();
if (process.client && window) {
  window.onresize = function () {
    debounce(getSizeType, 100)();
  };
  getSizeType();
}

function getSizeType() {
  let size = -1;
  let width = window.innerWidth;
  if (width < 760) {
    size = 4;
  } else if (width < 1000) {
    size = 3;
  } else if (width < 1190) {
    size = 2;
  } else if (width < 1350) {
    size = 1;
  } else {
    size = 0;
  }
  useWidth.value.sizeType = size;
  console.log(useWidth.value);
  return size;
}
</script>
