import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '../views/goodlist/goodlist'

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
