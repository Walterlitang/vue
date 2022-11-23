<template>
  <div id="right">
    <p>Right组件</p>
    <p>count的值:{{count}}</p>
    <!-- 子传父 -->
    <button @click="show">+1</button>
    <!-- 兄弟之间共享数据 -->

  </div>
</template>

<script>
import bus from './EventBus'
export default {
  data() {
    return {
      count: 100,
      msgFromLeft: '',
    }
  },
  created() {
    this.$emit('numchange', this.count)
    bus.$on('share', (val) => {
      console.log(val)
    })
  },
  methods: {
    show() {
      this.count++
      this.$emit('numchange', this.count)
    },
  },
}
</script>

<style>
#right {
  height: 200px;
  background-color: pink;
}
</style>