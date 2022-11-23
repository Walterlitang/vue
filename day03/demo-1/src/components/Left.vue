<template>
  <div id="app">
    left组件
    <hr>
    <!-- 当没有写init属性时，会自动给init赋默认值 -->
    <MyCount></MyCount>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
#app {
  background-color: orange;
  width: 500px;
  height: 200px;
}
// count组件中的h5样式没有生效
// 加上/deep/可以让后代样式生效
/deep/ h5 {
  background-color: pink;
}
</style>