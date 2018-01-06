<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{pCount}}</p>
    <v-counter 
      :count='pCount'
      @increase='inc' 
      @decrease='de'></v-counter>
    
  </div>
</template>

<script>
import VCounter from './counter/counter'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vue 使用的是 模板语法: {{}}  双大括号',
      pCount: 1
    }
  },
  components:{
    VCounter
  },
  methods: {
    inc(){
      this.pCount ++;
    },
    de(){
      this.pCount--;
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
