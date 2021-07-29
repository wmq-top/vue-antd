import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/LogIn.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Desktop',
    name: 'Desktop',
    component: () => import('../desktop/Desktop.vue')
  },  
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('../setting/Home.vue'),
    children: [
      {
        path: 'Wlan',
        name: 'wlan',
        component: () => import('../setting/network/Wlan.vue')

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

 export default router



