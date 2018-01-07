<template>
 <div class="header">
     <div class="title">
         <span class="icon"></span>
         <div>
             <h1></h1>
         </div>
     </div>
     <div class="login">
         <span>Login</span>
         <span>Logout</span>
     </div>
 </div>
</template>

<script >

 export default {
   data() {
     return {

     }

   }
 }
</script>

<style scoped lang='less'>
    .header {
        width: 100%;
        height: 30px;
        background-color: red;
        .title {
            float: left;
        }
        .login {
            float: right;
            margin-right: 20px;
        }
    }
</style>
