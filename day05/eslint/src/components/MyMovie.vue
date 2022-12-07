<template>
  <div>
    <h2>Movie</h2>
    <hr>
    <router-link to="/movie/book/1">洛基</router-link>
    <router-link to="/movie/book/2">雷神</router-link>
    <router-link to="/movie/book/3">复联</router-link>
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
  background-color: skyblue;
}
</style>
