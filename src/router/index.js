import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '../views/goodlist'
import Goodsinfo from '../views/goodsinfo'
import info from '../components/info/info'
import comment from '../components/comment/comment'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'goodlist',
      component: GoodList
    }
  ]
})
