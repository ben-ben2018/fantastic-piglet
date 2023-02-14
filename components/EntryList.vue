<template>
  <div class="entry-list">
    <div class="entry" v-for="entry in entrys">
      <div class="meta-container">
        <span class="meta">{{ entry.author }}</span>
        <span class="meta">{{ entry.time }}</span>
      </div>
      <div class="info-box">
        <div class="info">
          <div class="title">{{ entry.title }}</div>
          <div class="content-box">
            <div class="content">{{ entry.content }}</div>
          </div>
          <div>{{ entry.count.like }} {{ entry.count.message }}</div>
        </div>
        <img v-if="entry.img" :src="entry.img" alt="" srcset="" class="thumb" />
      </div>
    </div>
  </div>
</template>

<script setup>
let entrys = [
  {
    author: "zzj",
    time: "今天",
    title: "好耶",
    content:
      "好耶好耶背景 大家在日常开发中应该经常会有需要切换不同环境地址的情况。当一个项目代码切换环境地址时，vue-cli没有能够感知文件的变化，所以代理的还是旧的地址，所以通常我们需要执行npm&nbsp;run&nbsp;serve",
    img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cec5f2285065414391babc61eb2af856~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
    count: {
      like: 0,
      message: 0,
    },
  },
  {
    author: "zzj",
    time: "今天",
    title: "好耶",
    content:
      "好耶好耶背景 大家在日常开发中应该经常会有需要切换不同环境地址的情况。当一个项目代码切换环境地址时，vue-cli没有能够感知文件的变化，所以代理的还是旧的地址，所以通常我们需要执行npm&nbsp;run&nbsp;serve",
    img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cec5f2285065414391babc61eb2af856~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
    count: {
      like: 0,
      message: 0,
    },
  },
];
</script>
<style scoped>
@import url(~/assets/style/entry/default.css);
@import url(~/assets/style/entry/phone.css);
</style>
