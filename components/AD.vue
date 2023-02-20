<template>
  <div class="banner">
    <img :src="adSrc" alt="" srcset="" />
    <div class="banner-icon">广告</div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

.banner {
  position: relative;
}
.banner-icon {
  position: absolute;
  right: 10px;
  bottom: 10px;
  line-height: 36px;
  height: 36px;
  font-size: 20px;
  transform: scale(0.5);
  transform-origin: right bottom;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 300;
}
</style>

<script setup>
const { data } = await useFetch("/api/getAD");
let adSrc = data.value.attributes.imgUrl;
</script>
