<template>
  <div id="app">
    <h1>App根组件-----{{n}}</h1>
    <hr>
    <Left :msg="message"
          :user="userinfo"></Left>
    <Right @numchange="num"></Right>
  </div>
</template>
<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  data() {
    return {
      message: 'hello world',
      userinfo: {
        name: 'zs',
        age: 18,
      },
      n: 0,
    }
  },
  components: {
    Left,
    Right,
  },
  methods: {
    num(val) {
      this.n = val
    },
  },
}
</script>
<style lang="less" scoped>
#app {
  padding: 2px;
  background-color: #ccc;
}
</style>