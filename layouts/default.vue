<template>
  <div>
    <Header></Header>
    <main>
      <div><slot></slot></div>
    </main>
    <footer></footer>
  </div>
</template>
<script setup></script>
<style>
@import url(~/assets/style/lightColor.css);
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 12px;
}
body {
  background-color: var(--htmlBg);
}
li {
  list-style: none;
}
footer {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
main {
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
