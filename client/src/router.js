import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from '@/components/Home'
import Contacts from '@/components/Content/Contacts'
import Portfolio from '@/components/Content/Portfolio'
import PortfolioList from '@/components/Content/PortfolioList'
import Price from '@/components/Content/Price'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Categories from '@/components/Admin/Categories'
import Technologies from '@/components/Admin/Technologies'
import Works from '@/components/Admin/Works'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfoliolist',
      name: 'portfoliolist',
      component: PortfolioList
    },
    {
      path: '/price',
      name: 'price',
      component: Price
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: Technologies,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
