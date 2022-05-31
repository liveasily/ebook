import Vue from 'vue'
import Router from 'vue-router'
import Ebook from '@/Ebook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      component: Ebook
    }
    // {
    //   path:'/ebook',
    //   component:()=>import('../Ebook.vue')//懒加载
    // }
  ]
})
