import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页路由
  {
    path:'/login',
    component: () => import('@/views/Login') 
  },

  // 手机登录页
  {
    path:'/phoneLogin',
    component: () => import('@/views/PhoneLogin')
  },

  // 首页路由
  {
    path: '/home',
    component: () => import('@/views/Home'),
    
    // 首页子路由 
    children: [
      // 首页里面的 发现 页面
      {
        path: 'find',
        component: () => import('@/views/Home/Find')
      },

      // 首页里面的 播客 页面
      {
        path: 'podcast',
        component: () => import('@/views/Home/Podcast')
      },

      // 首页里面的 我的 页面
      {
        path: 'MyPage',
        component: () => import('@/views/Home/MyPage')
      },

      // 首页里面的 K歌 页面
      {
        path: 'karaoke',
        component: () => import('@/views/Home/Karaoke')
      },

      // 首页里面的 云村 页面
      {
        path: 'yuncun',
        component: () => import('@/views/Home/Yuncun')
      },

      // 进到首页默认进入发现页面
      {
        path: '',
        redirect: 'find'
      }
    ]
  },

  // 搜索页路由
  {
    path: '/searchPage',
    component: () => import('@/views/SearchPage')
  },

  // 私人FM路由
  {
    path: '/privateFM',
    component: () => import('../views/PrivateFM')
  },

  // 进入跳转到首页
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   const user = window.localStorage.getItem('user')

//   if (to.path === '/' && !user) {
//     next('/login')
//     return
//   }
  
//   next()
// })

export default router
