<template>
  <div>
    <p>book组件{{$route.params.id}}</p>
    <hr>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>
div {
  width: 100%;
  height: 20px;
  background-color: black;
}
</style>
