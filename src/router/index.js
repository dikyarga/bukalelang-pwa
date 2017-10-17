import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'

// Layout
import MainLayout from '@/components/Layout/MainLayout'

// Homepage <- non-login
import HomepageIndex from '@/components/Homepage/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'HomepageIndex',
          component: HomepageIndex
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
  ]
})
