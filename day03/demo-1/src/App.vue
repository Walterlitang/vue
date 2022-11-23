<template>
  <div>
    App根组件
    <Left></Left>
    <Right></Right>
    <Book></Book>
  </div>
</template>
<script>
import Book from '@/components/Book.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  components: {
    Left,
    Right,
    Book,
  },
}
</script>
<style lang="less" scoped>
</style>