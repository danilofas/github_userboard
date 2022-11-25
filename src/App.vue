<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/base.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
