<template>
  <div class="computed">
    <button @click="add">+</button>
    <span>{{count}}</span>
    <button @click="sub">-</button>
  </div>
</template>

<script>
import bus from './EventBus'
export default {
  props: {
    count: {
      required: true,
      type: Number,
    },
    id: {
      required: true,
      type: Number,
    },
  },
  methods: {
    add() {
      bus.$emit('addCount', { num: this.count + 1, id: this.id })
      // console.log(1)
      // this.$emit('addCount', { num: this.count, id: this.id })
    },
    sub() {
      this.$emit('subCount', { num: this.count, id: this.id })
    },
  },
}
</script>

<style>
.computed {
  float: right;
  margin-right: 20px;
}
button {
  appearance: none;
  border: 0;
  margin: 0px 10px;
  width: 10px;
  font-size: 15px;
  background-color: white;
}
.computed > span {
  display: inline-block;
  width: 30px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}
</style>