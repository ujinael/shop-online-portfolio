import { createRouter, createWebHistory } from 'vue-router'
import VProductsPage from '@/pages/products/VProductsPage.vue'

export const routes = [
    {
      path: '/',
      name: 'products',
      component: VProductsPage,
      meta:{
      layout:'main-layout'
      ,label:'Каталог'
      ,title:"Картины эпохи возрождения"
    },
    },
    {
      path: '/#',
      name: 'delivery',
      component: VProductsPage,
      meta:{
      layout:'main-layout'
      ,label:'Доставка'
      ,title:"Картины эпохи возрождения"
    },
    },
    {
      path: '/#',
      name: 'cash',
      component: VProductsPage,
      meta:{
      layout:'main-layout'
      ,label:'Оплата'
      ,title:'Картины эпохи возрождения'
    },
    },
    {
      path: '/#',
      name: 'contacts',
      component: VProductsPage,
      meta:{
      layout:'main-layout'
      ,label:'Контакты'
      ,title:'Картины эпохи возрождения'
    },
    },
    {
      path: '/#',
      name: 'about',
      component: VProductsPage,
      meta:{
      layout:'main-layout'
      ,label:`О компании`
      ,title:'Картины эпохи возрождения'
    },
    },
  ]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
