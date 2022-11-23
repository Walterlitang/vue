<template>
  <div>
    <p>count的值是：{{count}}</p>
    <button @click="count++">点击</button>
    <h5>这是一个h5标签</h5>
  </div>
</template>

<script>
export default {
  //props是自定义属性，只能读
  props: {
    //以对象的形式可以设置props的
    init: {
      //默认值
      default: 100,
      //设置类型
      type: Number,
    },
  },
  data() {
    return {
      count: this.init,
    }
  },
}
</script>

<style>
</style>