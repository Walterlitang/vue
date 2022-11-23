<template>
  <div id="left">
    <h5>Left组件</h5>
    <p>count的值：{{count}}</p>
    <button @click="reset">重置</button>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  props: ['reCount'],
  data() {
    return {
      count: this.reCount,
    }
  },
  methods: {
    add() {
      this.count++
    },
    reset() {
      this.count = 0
    },
  },
}
</script>

<style>
#left {
  background-color: orange;
  height: 200px;
}
</style>