<template>
 <div class="info">
     <h1>商品详情页面</h1>
     <p> <router-link :to="{name:'info'}">详情</router-link> <router-link :to="{name:'comment'}">评论</router-link>  </p>
    <!-- <p><button @click="toInfo">详情</button> <button @click="toComment">评论</button></p> -->
     <router-view></router-view>
 </div>
</template>

<script >
 export default {
   data() {
     return {
     }
   },
   methods:{
       toInfo(){
        //    this.$router.push({path:'/goodsinfo/info'})
           this.$router.push({name:'info'})
       },
       toComment(){
           this.$router.push({name:'comment'})
        //    this.$router.push({path:'/goodsinfo/comment'})
       }
   }
 }
</script>

<style scoped >
    .router-link-active {
        color: pink;
    }
 
</style>
