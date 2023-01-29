<template>
  <div>
    <Header></Header>
    <main>
      <content><slot></slot></content><right>123</right>
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
const darkMode = useDarkMode();
console.log(darkMode);
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 12px;
}
li {
  list-style: none;
}
footer {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
