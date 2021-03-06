import Vue from 'vue'
import Router from 'vue-router'
import '../common/css/reset.scss'
import '../common/css/iconfont.css'
import home from '../components/home/home'
import financial from '../components/financial/financial'
import ious from '../components/ious/ious'
import raise from '../components/raise/raise'
import personal from '../components/Personal/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:"/financial",
      component:financial
    },
    {
      path:'/ious',
      component:ious
    },
    {
      path:'/raise',
      component:raise
    },
    {
      path:'/personal',
      component:personal
    }
  ]
})
