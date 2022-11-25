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
           @inpChange="changeId"
           @sub-count="sub"></Goods>
    <Footer :isFull="fullState"
            :list="list"
            :price="price"
            :count="all"
            @allCh="show"></Footer>
  </div>
</template>

<script>
//导入axios库
import axios from 'axios'
//导入Header组件
import bus from './components/EventBus'
import Footer from './components/Footer.vue'
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
    Footer,
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
      this.list.some((item) => {
        if (item.id === val.id) {
          item.goods_state = val.goods_state
          return true
        }
      })
    },
    show(val) {
      this.list.forEach((item) => {
        item.goods_state = val
      })
    },
    // add(val) {
    //   //bus.$on()
    //   //this.list.filter((item) => item.id === val.id)[0].goods_count++
    // },
    sub(val) {
      this.list.filter((item) => item.id === val.id)[0].goods_count--
    },
  },
  created() {
    //调用请求数据的方法
    this.initData()
    bus.$on('addCount', (val) => {
      this.list.filter((item) => item.id === val.id)[0].goods_count = val.num
    })
  },
  computed: {
    fullState() {
      return this.list.every((item) => item.goods_state)
    },
    price() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((pre, item) => {
          return (pre += item.goods_price * item.goods_count)
        }, 0)
    },
    all() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((pre, item) => {
          return (pre += item.goods_count)
        }, 0)
    },
  },
}
</script>

<style lang="less" scoped>
</style>
