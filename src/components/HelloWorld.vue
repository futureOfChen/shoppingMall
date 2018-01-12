<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="sendOne">发送getOne请求</button>
    <button @click="sendTwo">发送getTwo请求</button>
  </div>
</template>

<script>
var qs = require('qs');
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    sendOne(){
      this.$http.get('api/one?id=999').then(res => {
        console.log(res)
      },
      err => {
        console.log(err)
      })
    },
    sendTwo(){
      let formData = new FormData();
       formData.append('username', 'jack');
       formData.append('psw', 'ok');
      this.$http.post('api/two',formData
      ).then(res => {
        console.log(res)
      },
      err => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
