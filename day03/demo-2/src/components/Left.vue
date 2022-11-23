<template>
  <div id="left">
    <p>left组件</p>
    <p>msg的值是：{{msg}}</p>
    <p>user的值是：{{user}}</p>
    <button @click="msg='修改msg的值'">msg</button>
    <button @click="user.sex='男'">user</button>
    <hr>
    <button @click="send">兄弟之间共享数据</button>
  </div>
</template>

<script>
import bus from './EventBus.js'
export default {
  props: ['msg', 'user'],
  data() {
    return {
      sendToRight: '一首唐诗',
    }
  },
  methods: {
    send() {
      bus.$emit('shar', sendToRight)
    },
  },
}
</script>

<style>
#left {
  height: 300px;
  background-color: orange;
}
</style>