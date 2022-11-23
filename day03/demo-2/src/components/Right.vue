<template>
  <div id="right">
    <p>Right组件</p>
    <p>count的值:{{count}}</p>
    <button @click="show">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100,
      msgFromLeft: '',
    }
  },
  created() {
    this.$emit('numchange', this.count)
  },
  methods: {
    show() {
      this.count++
      this.$emit('numchange', this.count)
      console.log(this)
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