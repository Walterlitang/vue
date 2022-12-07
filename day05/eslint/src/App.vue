<template>
  <div id="app">
    <h2>App根组件</h2>
    <a href="#/MyHome">Home</a>&emsp;&emsp;&emsp;
    <a href="#/MyAbout">About</a>&emsp;&emsp;&emsp;
    <a href="#/MyMovie">Movie</a>&emsp;&emsp;&emsp;
    <hr>
    <component :is="cName"></component>
  </div>
</template>
<script>
import MyAbout from '@/components/MyAbout.vue'
import MyHome from '@/components/MyHome.vue'
import MyMovie from '@/components/MyMovie.vue'
export default {
  name: 'App',
  data () {
    return {
      cName: 'MyHome'
    }
  },
  components: {
    MyHome,
    MyAbout,
    MyMovie
  },
  created () {
    window.onhashchange = () => {
      console.log(location.hash)
      this.cName = location.hash.slice(2)
    }
  }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 300px;
  background-color: #ccc;
}
</style>
