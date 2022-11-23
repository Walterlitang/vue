<template>
    <div class="test-box">
        <h3>这是用户自定义的Test.vue---{{username}}</h3>
        <button @click="btn">修改用户名</button>
    </div>
</template>
<script>
    //默认导出，这是固定写法
    export default{
        //组件中的data必须是一个函数
        data(){
          //这个return出去的{}中，可以定义数据
          return {
            username:"admin"
          }
        },
        methods:{
            btn(){
              //在vue组件中，this就表示当前组件的实例对象
              console.log(this);
              this.username="张三"
            }
        },
        //当前组件中的侦听器
        watch:{

        },
        //当前组件中的计算属性
        computed:{

        },
        //过滤器，vue2.x和1.x才有
        filters:{

        }
    }
</script>
<style>
    .test-box{
      background-color: pink;
    }
</style>