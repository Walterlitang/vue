<template>
  <div id="app">
    <!-- 普通组件的加载 -->
    <!-- <Left></Left>
    <Right></Right> -->
    <!-- 动态组件 -->
    <button @click="cName='Left'">切换成Left组件</button>
    <button @click="cName='Right'">切换成Right组件</button>
    <keep-alive include="MyLeft,Right">
      <!-- 将内部组件缓存，组件状态不会发生变化 -->
      <component :is="cName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  name: 'App',
  data() {
    return {
      cName: 'Right',
    }
  },
  components: {
    Left,
    Right,
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
