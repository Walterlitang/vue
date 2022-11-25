<template>
  <div class="goods">
    <input type="checkbox"
           :checked="goods_state"
           @change="changeState">
    <img :src="goods_img">
    <div class="content">
      <p class="title">{{goods_name}}</p>
      <div class="footer">
        <span class="price">￥{{goods_price}}</span>
        <Count :count="goods_count"
               :id="id"
               @addCount="add"
               @subCount="sub"></Count>
      </div>
    </div>
  </div>
</template>

<script>
import Count from '@/components/Count.vue'
export default {
  components: {
    Count,
  },
  props: {
    goods_img: {
      type: String,
      require: true,
    },
    goods_name: {
      type: String,
      required: true,
    },
    goods_price: {
      type: Number,
      required: true,
    },
    goods_count: {
      type: Number,
      required: true,
    },
    goods_state: {
      type: Boolean,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeState(e) {
      const state = e.target.checked
      this.$emit('inpChange', { id: this.id, goods_state: state })
    },
    add(val) {
      console.log(2)
      this.$emit('add-count', val)
    },
    sub(val) {
      this.$emit('sub-count', val)
    },
  },
}
</script>

<style scoped>
* {
  font-size: 12px;
}
.goods {
  height: 150px;
  position: relative;
  background-color: white;
  margin: 0 10px;
  border-bottom: 1px solid #ccc;
}
input[type='checkbox'],
img,
.content {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
}
input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
}
input[type='checkbox']:checked {
  border: 0;
  background-color: rgb(2, 115, 249);
}
input[type='checkbox']:checked::before {
  content: '\2714';
  position: absolute;
  left: 5px;
  color: white;
}
img {
  width: 125px;
  height: 125px;
  margin-left: 25px;
}
.content {
  position: absolute;
  margin-left: 160px;
  width: calc(100% - 160px);
  height: 125px;
}
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.price {
  display: inline-block;
  color: red;
}
.title {
  margin-right: 20px;
  font-weight: bold;
}
</style>