<template>
<div id="app">
  <headerBar></headerBar>
  <router-view></router-view>
  <footerBar></footerBar>
</div>
</template>

<script>
import headerBar from '@/components/headerBar.component'
import footerBar from '@/components/footerBar.component'
import './assets/font-awesome.css';
import './common/main.css';
export default {
  name: 'app',
  components: {
    'headerBar': headerBar,
    'footerBar': footerBar
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
