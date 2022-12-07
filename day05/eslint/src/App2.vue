<template>
  <div id="app">
    <h2>App2根组件---测试vue-router</h2>
    <!-- 使用router-link实现路由跳转 -->
    <router-link to="/home">home</router-link>&emsp;&emsp;&emsp;
    <router-link to="/about">about</router-link>&emsp;&emsp;&emsp;
    <router-link to="/movie">movie</router-link>&emsp;&emsp;&emsp;
    <button @click="show">跳转到movie组件</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    show () {
      // 使用api导航式编程的方式实现路由跳转
      // this.$router.push('/movie')
      this.$router.replace('/movie')
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 300px;
  background-color: #ccc;
}
</style>
