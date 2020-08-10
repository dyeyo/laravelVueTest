import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import App from './views/App'

import Bienvenidos from './views/index/bienvenidos'
import Noticias from './views/index/noticias'
import Nosotros from './views/index/nosotros'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'bienvenidos',
      component: Bienvenidos,
      // meta: {
      //   requiresAuth: false,
      // }
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: Noticias,
      // meta: {
      //   requiresAuth: false,
      // }
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros,
      // meta: {
      //   requiresAuth: false,
      // }
    }
  ],
  mode: 'history',
  linkActiveClass: 'is-active'
});
