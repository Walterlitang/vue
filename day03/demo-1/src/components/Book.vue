<template>
  <div>
    {{book.length}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: [],
    }
  },
  beforeCreate() {
    //初始化事件和生命周期函数
    //此时data,props,methods都不能使用
  },
  created() {
    //模板结构还没有渲染到浏览器中，但是可以使用data,props,methods等
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      const { data } = JSON.parse(xhr.responseText)
      this.book = data
    })
    xhr.open('get', 'http://www.liulongbin.top:3006/api/getbooks')
    xhr.send()
  },
  before() {
    //将要把内存中编译好的模板结构渲染到浏览器中
  },
  mounted() {
    //模板结构渲染到了浏览器
  },
  beforeUpdate() {
    console.log('abc')
  },
  updated() {
    console.log(123)
  },
}
</script>

<style>
</style>