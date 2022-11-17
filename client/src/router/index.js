import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'auth', auth: false},
    component: MainView
  },
  {
    path: '/create',
    name: 'create',
    meta: {auth: true},
    component: () => import('@/views/CreateView')
  },
  {
    path: '/links',
    name: 'links',
    meta: {auth: true},
    component: () => import('@/views/LinksView')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {auth: true},
    component: () => import('@/views/DetailView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = JSON.parse(localStorage.getItem('user'));
  const match = to.matched.some(path => path.meta.auth);

  if (match && !isAuth) {
    return next('/')
  } 

  if (!match && isAuth) {
    return next('/create')
  }

  next();

})

export default router
