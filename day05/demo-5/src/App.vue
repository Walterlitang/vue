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
      <component :is="cName">
        <template #def>
          <p>这是一个擦超</p>
        </template>
        <template #nam>
          <h2>这是一个name擦超</h2>
        </template>
      </component>
    </keep-alive>
    <hr>
    <p v-color="color">这是自定义指令v-color</p>
    <button @click="color='red'">改变颜色</button>
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
      color: 'blue',
    }
  },
  components: {
    Left,
    Right,
  },
  // 自定义指令
  directives: {
    //注册自定义指令v-color
    color: {
      bind(el, binding) {
        //bind函数会在绑定元素的时候执行
        el.style.color = binding.value
      },
      update(el, binding) {
        //每次dom元素更新的时候触发函数
        console.log('dom元素更新触发函数')
        el.style.color = binding.value
      },
    },
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
