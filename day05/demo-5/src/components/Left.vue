<template>
  <div>
    <h2>Left组件----{{count}}</h2>
    <button @click="count++">+1</button>
    <hr>
    <slot name="def"></slot>
    <slot name="nam"></slot>
    <hr>
    <p v-color="'red'">这是一个p标签</p>
  </div>
</template>

<script>
export default {
  // 当提供了name属性后，组件名称就会变为MyLeft
  name: 'MyLeft',
  data() {
    return {
      count: 0,
    }
  },
  deactivated() {
    console.log('组件被缓存')
  },
  activated() {
    console.log('组件被激活')
  },
}
</script>

<style>
</style>