<template>
  <div class="author-list">
    <div class="title">作者榜</div>
    <div class="author-info" v-for="author in authors">
      <div class="avatar">
        <img :src="author.avatar" alt="" />
      </div>
      <div class="info">
        <div class="user-name">{{ author.name }}</div>
        <div class="user-position">{{ author.position }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-list {
  background-color: var(--bg);
  color: var(--font-1);
}
.title {
  padding: 1rem 1.3rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.author-info {
  display: flex;
  margin: 10px 0 !important;
}
.avatar {
  flex: 0 0 auto;
  margin-left: 15px;
}
.avatar img {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.info {
  margin-left: 15px;
}
.user-name {
  font-size: 1.16rem;
  font-weight: 400;
  color: var(--font-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.user-position {
  color: #909090;
  font-size: 1rem;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script setup>
let authors = [
  {
    avatar:
      "https://p3-passport.byteimg.com/img/user-avatar/7ab228493b523ef92f8c9211467bcfd8~100x100.awebp",
    name: "zzj",
    position: "zzj",
    id: "1",
  },
];
</script>
