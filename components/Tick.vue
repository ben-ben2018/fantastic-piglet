<template>
  <div class="tick-main">
    <div class="title">今日签到</div>
    <div>
      <button>签到</button>
    </div>
  </div>
</template>

<style scoped>
.tick-main {
  width: 100%;
  height: 60px;
  color: var(--font-1);
  background: var(--bg);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title {
  color: var(--font-1);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
button {
  border-radius: 4px;
  height: 36px;
  width: 74px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(30, 128, 255, 0.3);
  background-color: rgba(30, 128, 255, 0.05);
  color: var(--main);
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}
</style>
