import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forgetPassword from '../Hmoe/ForgetPassword.vue'
import PersonalEditionRegister from '../Hmoe/PersonalEditionRegister.vue'
import ServiceArg from '../Hmoe/ServiceArg.vue'
import index from '../LoginAfter/index.vue'
import DataCenterData from '../DataCenter/DataCenterSet.vue'
import Teach from '../Today/Teach.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/forgetPassword',
      component: forgetPassword
    },
    {
      path: '/PersonalEditionRegister',
      component: PersonalEditionRegister
    },
    {
      path: '/ServiceArg',
      component: ServiceArg
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/DataCenterData',
      component: DataCenterData
    },
    {
      path: '/Teach',
      component: Teach
    }
  ]
})
