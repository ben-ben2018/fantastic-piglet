<template>
  <div class="main">
    <div class="main-left">
      <Tags></Tags>
      <Sort></Sort>
      <EntryList></EntryList>
    </div>
    <div class="main-right">
      <div class="right-card"></div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
};
</script>
<style scoped>
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
  background-color: var(--bg);
}
</style>
