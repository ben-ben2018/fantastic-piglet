<template>
  <div class="main">
    <div class="main-left">
      <Tags @loadRead="loadRead"></Tags>
      <Sort @loadSort="loadRead"></Sort>
      <EntryList :entryList="entryList || []"></EntryList>
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
let entryList = ref([]);
let loading = false,
  nowTag = "/综合",
  nowSort = "hot",
  nowPage = 1,
  temp = [];
async function loadRead(tag, page, sort, clear) {
  if (clear) {
    nowPage = 1;
    entryList.value = [];
  }
  return new Promise(async (resolve, reject) => {
    tag = tag || nowTag;
    tag == "/综合" ? (tag = "") : tag;
    let path = `/api/getList/?type=${tag.replaceAll("/", "")}&page=${
      page ? page : nowPage
    }&sort=${sort ? sort : nowSort}`;
    nowTag = tag;
    nowSort = sort;
    const { data } = await useFetch(path);
    if (String(temp) == String(data.value)) {
      temp = data.value;
      nowPage--;
    } else {
      entryList.value.push(...data.value);
    }
    resolve(...data.value);
  });
}
loadRead("/综合");
if (process.client && window) {
  window.onscroll = function () {
    if (loading) {
      return;
    }
    let documentE = document.documentElement;
    let windowHeight = documentE.clientHeight || document.body.clientHeight;
    let documentHeight = documentE.scrollHeight || document.body.scrollHeight;
    let scrollTop = documentE.scrollTop || document.body.scrollTop;
    if (windowHeight + scrollTop + 2 >= documentHeight) {
      loading = true;
      loadRead(nowTag, ++nowPage, false).then(() => {
        loading = false;
      });
    }
  };
}
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
