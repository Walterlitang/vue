<template>
  <div class="footer">
    <div class="left">
      <input type="checkbox"
             :checked="isFull"
             @change="allChange"><span>全选</span>
    </div>
    <div class="center">
      <p>合计：<span class="price">￥{{price.toFixed(2)}}</span></p>
    </div>
    <div class="right">
      <button>结算（{{count}}）</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      required: true,
      type: Array,
    },
    isFull: {
      required: true,
      type: Boolean,
    },
    price: {
      required: true,
      type: Number,
    },
    count: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    allChange(e) {
      const state = e.target.checked
      this.$emit('allCh', state)
    },
  },
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  background-color: white;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ccc;
}
.left {
  margin-left: 20px;
}
.right {
  margin-right: 5px;
}
.left,
.right,
.center {
  display: inline-block;
  height: 60px;
  line-height: 60px;
}
.right {
  float: right;
}
.center {
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
}
.price {
  color: red;
  font-weight: bold;
}
.left span {
  margin-left: 5px;
}
.right button {
  appearance: none;
  width: 100px;
  height: 50px;
  border: 0px;
  background-color: rgb(2, 115, 249);
  border-radius: 40px;
  color: white;
}
</style>