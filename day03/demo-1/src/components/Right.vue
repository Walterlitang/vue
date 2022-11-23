<template>
  <div id="app">
    Right组件
    <hr>
    <MyCount :init="6"></MyCount>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
#app {
  background-color: skyblue;
  width: 500px;
  height: 200px;
}
</style>