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
.entry-list {
  background-color: var(--bg);
}
.entry {
  cursor: pointer;
  position: relative;
  background: var(--bg);
  padding: 12px 20px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid var(--grayBorderBottom);
}
.entry div {
  margin-top: 3px;
}
.meta-container {
  display: flex;
  align-items: center;
  line-height: 22px;
  color: #4e5969;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.meta {
  font-size: 13px;
  padding: 0 8px;
  max-width: 162px;
}

.meta:nth-child(n + 2) {
  border-left: 1px solid var(--searchFormBorder);
}

.title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--font1);
  padding-top: 6px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.info-box {
  display: flex;
  width: 100% !important;
  justify-content: space-between;
}
.info {
  flex: 1 1 auto;
  width: calc(100% - 300px);
}
.content-box {
  display: flex;
}
.content {
  font-weight: 400;
  font-size: 13px;
  color: #86909c;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.thumb {
  flex: 0 0 auto;
  width: 120px;
  height: 80px;
  margin-left: 24px;
  background-color: #fff;
  border-radius: 2px;
}
</style>
