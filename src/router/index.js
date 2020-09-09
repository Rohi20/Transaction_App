import Vue from 'vue'
import Router from 'vue-router'
import ResetTransaction from '@/components/ResetTransaction/ResetTransaction'
import ManageTransaction from '@/components/ManageTransaction/ManageTransaction'
import DisplayTransaction from '@/components/DisplayTransaction/DisplayTransaction'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'DisplayTransaction',
    component: DisplayTransaction
  }, {
    path: '/manage',
    name: 'ManageTransaction',
    component: ManageTransaction

  }, {
    path: '/reset',
    name: 'ResetTransaction',
    component: ResetTransaction
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
