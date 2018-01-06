<template>
 <div class="counter">
     <button @click="increase">+</button>
     <span>{{count}}</span>
     <button @click="decrease">-</button>
 </div>
</template>

<script >
 export default {
   data() {
     return {
     }
   },
   props:{
       count:{
           type:Number,
           default: 0
       }
   },
   methods:{
       increase(){
           this.$emit('increase');
       },
       decrease() {
        //    this.count --;
        this.$emit('decrease');
       }
   }
 }
</script>

<style scoped lang='less'>

    .counter {
        color:rgb(231, 107, 107);
        & > * {
            display: inline-block;
            vertical-align: top;
        }
        & > input {
            color:red;
            width: 30px;
        } 
    }
 
</style>
