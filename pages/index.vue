<template>
  <div class="main">
    <div class="main-left">
      <Tags></Tags>
      <Sort></Sort>
      <EntryList :entryList="data"></EntryList>
    </div>
    <div class="main-right">
      <div class="right-card">
        <Tick></Tick>
        <AD></AD>
        <AuthorList></AuthorList>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/getList");
</script>

<style scoped>
@import url("~/assets/style/indexS/phone.css");
.main {
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.main-left {
  width: 75%;
}
.main-right {
  width: 23%;
  right: 0;
  top: 0;
  position: absolute;
}
.right-card {
  width: 100%;
}

.right-card > * {
  margin-bottom: 20px;
}
</style>
