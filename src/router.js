import Vue from 'vue'
import Router from 'vue-router'
import DefaultContainer from '@/components/DefaultContainer'
import AdminContainer from '@/components/AdminContainer'
import Policy from '@/views/main/Policy'
import Main from '@/views/main/Main'
import Help from '@/views/help/Help'
import Profile from '@/views/profile/Profile'
import kakaoLogin from '@/views/login/kakaologin'
import example from '@/components/example' // 나중에 삭제

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DefaultContainer',
			component: DefaultContainer,
			children: [
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/kakaologin',
          name: 'kakaologin',
          component: kakaoLogin
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/help',
          name: 'Help',
          component: Help
        },
        {
          path: '/policy',
          name: 'Policy',
          component: Policy
        },
        {
          path: '/admin',
          name: 'AdminContainer',
          component: AdminContainer,
          children: [
            {
              path: '/result',
              name: 'result',
              component: example
            },
            {
              path: '/factory',
              name: 'factory',
              component: example
            }
          ]
        }
      ]
    }
  ]
})
