<template>
  <div id="app">
    <h1 ref="myh1">App根组件</h1>
    <button @click="show">打印this</button>
    <button @click="reLeft">重置Left组件中count的值</button>
    <hr>
    <input type="text"
           v-if="inputVisible"
           @blur="showButton"
           ref="inpRef">
    <button @click="showInput">展示输入框</button>
    <hr>
    <Left ref="left"
          :reCount="count"></Left>
  </div>
</template>

<script>
import Left from './components/Left'
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      inputVisible: false,
    }
  },
  methods: {
    show() {
      //打印this，当前App组件的实例对象
      console.log(this)
      console.log(this.$refs.myh1)
    },
    reLeft() {
      console.log(this.$refs.left)
      this.$refs.left.count = 0
    },
    showInput() {
      this.inputVisible = true
      //console.log(this.$refs.inpRef) //undefined 因为刚刚将输入框设置为true,此时页面还没有渲染成功,无法获取输入框
      this.$nextTick(() => {
        console.log(this.$refs.inpRef)
        this.$refs.inpRef.focus()
      })
    },
    showButton() {
      this.inputVisible = false
      console.log(this.$refs.inpRef)
    },
  },
  components: {
    Left,
  },
}
</script>

<style lang="less">
#app {
  padding: 2px;
  background-color: #ccc;
}
</style>
