import Router from 'vue-router'
import Vue from 'vue'
import paths from './paths'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: paths
})

export default router
