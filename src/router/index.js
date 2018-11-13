import Vue from 'vue'
import Router from 'vue-router'
import '../common/css/reset.scss'
import home from '../components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:home
    }
  ]
})
