import { createRouter, createWebHistory } from 'vue-router'
import homePage from  "../views/homePage.vue"
import formMain from  "../views/form/formMain.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/formMain',
      name: 'formMain',
      component: formMain
    },
  ]
})

export default router
