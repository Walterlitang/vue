<template>
  <div id="app">
    <Header></Header>
    <Goods v-for="item in list"
           :key="item.id"
           :goods_img="item.goods_img"
           :goods_name="item.goods_name"
           :goods_price="item.goods_price"
           :goods_count="item.goods_count"
           :goods_state="item.goods_state"
           :id="item.id"
           @inpChange="changeId"></Goods>
    App根组件
  </div>
</template>

<script>
//导入axios库
import axios from 'axios'
//导入Header组件
import Goods from './components/Goods.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  components: {
    Header,
    Goods,
  },
  methods: {
    //封装请求数据的方法
    async initData() {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      //只要请求回来的数据再页面上需要使用就必须转存到data中
      this.list = res.list
    },
    //修改list中对应id的值
    changeId(val) {
      this.list.some((item, index) => {
        if (item.id === val) {
          this.list[index].goods_state = !this.list[index].goods_state
          return true
        }
      })
    },
  },
  created() {
    //调用请求数据的方法
    this.initData()
  },
}
</script>

<style lang="less" scoped>
</style>
