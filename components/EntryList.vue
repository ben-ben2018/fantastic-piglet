<template>
  <div class="entry-list">
    <div class="entry" v-for="entry in entryList" :key="entry.id">
      <NuxtLink :to="'/read/' + entry.id">
        <div class="meta-container">
          <span class="meta">{{
            entry.attributes.jj_user.data.attributes.user_name
          }}</span>
          <span class="meta">{{ entry.attributes.updatedAt }}</span>
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
// let entrys = [...(props.entryList || [])];
// console.log(props.entryList);
</script>
<style scoped>
@import url(~/assets/style/entry/default.css);
@import url(~/assets/style/entry/phone.css);
</style>
