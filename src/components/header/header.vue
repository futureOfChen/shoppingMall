<template>
    <div class="header">

      <div class="login" v-show="isLoginShow">
          <div class="mask">  
              <div class="area">
                  <div class="close"><span @click="closeLoginPage">X</span></div>   
                  <div class="tips" v-show="isTipShow">您输入的用户名或密码有错误!!!</div>
                  <div class="item">
                      <span>用户名</span>
                      <input type="text" 
                        placeholder="请输入用户名"
                        v-model="userName">
                  </div>
                  
                  <div class="item">
                      <span>密码</span>
                      <input type="text" 
                        placeholder="请输入密码"
                        v-model="userPwd">
                  </div>
                  <button @click="login" class="confirm">确定</button>

              </div>
          </div>
      </div>


       <header class="header">
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
          <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
          <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
        <div class="navbar">
          <div class="navbar-left-container">
            <a href="/">
              <img class="navbar-brand-logo" src="./logo.png"></a>
          </div>
          <div class="navbar-right-container" style="display: flex;">
            <div class="navbar-menu-container">
              <!--<a href="/" class="navbar-link">我的账户</a>-->
              <span class="navbar-link"></span>
              <a href="javascript:void(0)" class="navbar-link" @click="showLoginPage" v-show="!hasLogin">Login</a>
              <a href="javascript:void(0)" class="navbar-link"  v-show="hasLogin">{{ loginUsername}}</a>
              
              <a href="javascript:void(0)" class="navbar-link" @click="logOut">Logout</a>
              <div class="navbar-cart-container">
                <span class="navbar-cart-count"></span>
                <a class="navbar-link navbar-cart-link" href="/#/cart">
                  <svg class="navbar-cart-logo">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
       </header> 
    </div>
</template>

<script >

 export default {
   data() {
     return {
       userName:'',
       userPwd:'',
       isLoginShow:false,
       isTipShow:false,
       hasLogin:false,
       loginUsername:''
     }
   },
   methods: {
     showLoginPage(){
       //让登录页面显示       
       this.isLoginShow = true;
     },
     login(){
       let formData = new FormData();
       formData.append('username',this.userName);
       formData.append('userpwd',this.userPwd);
      //  向后台发送请求
      this.$http.post('users/login',formData).then( (result) => {
        let res = result.data;
        if(res.status === 0) {
          this.hasLogin = true;
          this.loginUsername = res.result.username;
          this.isLoginShow = false;
        }else {
          this.isTipShow = true;
        }
      } , (err) => {
        console.log(err);
      } )
     },
     closeLoginPage(){
       this.isLoginShow = false;
     },
     logOut() {

       if(this.hasLogin){
        this.$http.post('users/logout').then( res => {
            // console.log(res.data);
            if( res.data.status === 0 ) {
              this.hasLogin = false;
              this.loginUsername = '';
              alert('用户已注销')
            }
          } )
        } 
     }


    }
 }
</script>

<style scoped lang='less'>

    .login {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        .mask {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);
            .area {
                position: absolute;
                top: 50%;
                left:50%;
                transform: translate3d(-50%,-50%,0);
                background-color: #bbb;
                padding: 26px 18px;
                .close {
                  padding:5px 6px;
                  text-align: right;
                  span{
                    background-color: #aaa;
                    cursor: pointer;
                  }
                }
                .tips {
                    padding-bottom: 15px;
                    color: red;
                    font-size: 16px;
                }
                .item {
                    padding: 5px;
                    span {
                        display: inline-block;
                        width: 80px;
                        color:red;
                    }
                    input {
                        height:30px;
                    }
                }
                .confirm {
                    padding: 5px 0;
                    color: white;
                    width: 100%;
                    background-color: rgb(98, 90, 219);
                }
            }
        }
    }
 
</style>

