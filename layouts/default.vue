<template>
  <div>
    <Header></Header>
    <main>
      <content><slot></slot></content>
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
const darkMode = useDarkMode();
console.log(darkMode.value);
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 12px;
  background-color: rgb(244, 245, 245);
}
li {
  list-style: none;
}
footer {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
main {
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  margin-top: 80px;
}
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
