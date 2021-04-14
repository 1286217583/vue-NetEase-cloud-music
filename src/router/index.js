import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = window.localStorage.getItem('user')

  if (to.path === '/' && !user) {
    next('/login')
    return
  }
  
  next()
})

export default router
