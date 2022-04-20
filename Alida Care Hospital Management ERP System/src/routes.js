import Vue from 'vue';
import VueRouter from 'vue-router';
import appLogin from './components/appLogin.vue';
import userProfile from './components/userProfile.vue';
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: appLogin
    
  },
  {
    path: '/about',
    name: 'About',
    component: userProfile
  }
];
// eslint-disable-next-line no-unused-vars
const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes
})

router.use(router)
router.mount('#app')

export default router