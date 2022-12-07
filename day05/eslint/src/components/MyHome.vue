<template>
  <div>
    <h2>home</h2>
    <hr>
    <router-link to="/home">tab1</router-link>&emsp;&emsp;&emsp;
    <router-link to="/home/tab2">tab2</router-link>&emsp;&emsp;&emsp;
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  width: 100%;
  height: 150px;
  background-color: yellow;
}
</style>
