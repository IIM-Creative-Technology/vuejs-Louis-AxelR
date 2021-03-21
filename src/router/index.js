import { createRouter, createWebHashHistory } from 'vue-router'
import admin from '../views/admin.vue'
import create from '../views/create.vue'
import page from '../views/page.vue'




const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/blog.vue')
  },
  {
    path: '/create',
    name: 'create',
   component:create
  },
  {
    path: '/blog/:id',
    name: 'page',
   component:page
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
