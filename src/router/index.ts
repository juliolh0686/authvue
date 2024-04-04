import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RecoveryPasswordView from '@/views/RecoveryPasswordView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'
import useAuth from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: RecoveryPasswordView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requireAuth: true
      }
    },
  ]
})

router.beforeEach((to,from,next) => {
  const auth = useAuth()
  const isAuth = auth.token

  if((to.meta.requireAuth) && (isAuth == null)) {
    next('/')
  }else {
    next()
  }

})

export default router
