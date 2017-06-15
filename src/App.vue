<template>
<div id="app">
  <headerBar></headerBar>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
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
  created: function() {
    this.$router.beforeEach((to, from, next) => {
      //   this.$root.eventHub.$emit('routerChange', to);
      next();
    })
  },
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>
