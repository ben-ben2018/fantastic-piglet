<template>
  <div class="entry-list">
    <div class="entry" v-for="entry in entryList" :key="entry.id">
      <NuxtLink :to="'/read/' + entry.id">
        <div class="meta-container">
          <span class="meta">{{
            entry.attributes.jj_user.data.attributes.user_name
          }}</span>
          <span
            class="meta"
            :time="getNowFormatDate(entry.attributes.updatedAt)"
            >{{ timeFormat(entry.attributes.updatedAt) }}</span
          >
          <span class="icon" v-if="entry.attributes.ad">广告</span>
        </div>
        <div class="info-box">
          <div class="info">
            <div class="title">{{ entry.attributes.title }}</div>
            <div class="content-box">
              <div class="content">{{ entry.attributes.summary }}</div>
            </div>
            <div>
              {{ entry.attributes.like }} {{ entry.attributes.message }}
            </div>
          </div>
          <img
            v-if="entry.attributes.img"
            :src="entry.attributes.img"
            alt=""
            srcset=""
            class="thumb"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  entryList: Array,
});

function getNowFormatDate(t) {
  let date = t ? new Date(t) : new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    strDate = date.getDate();
  if (month < 10) month = `0${month}`;
  if (strDate < 10) strDate = `0${strDate}`;
  return `${year}-${month}-${strDate}`;
}

function timeFormat(t) {
  let d = new Date(t),
    current = new Date();
  let leave = (d.getTime() - current.getTime()) / 86400000,
    leaveInt = parseInt(leave);
  if (leave <= 0) {
    return "一天内";
  }
  if (leave == 7) {
    return "一周前";
  }
  if (leave < 7) {
    leave == leaveInt ? null : (leave = leaveInt + 1);
    leave += "天前";
  } else {
    leave = getNowFormatDate(t);
  }
  return leave;
}
// let entrys = [...(props.entryList || [])];
// console.log(props.entryList);
</script>
<style scoped>
@import url(~/assets/style/entry/default.css);
@import url(~/assets/style/entry/phone.css);
</style>
