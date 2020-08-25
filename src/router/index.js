import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/:id',
    name: 'Event Detail',
    component: () => import('../views/EventDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
