import { createRouter, createWebHistory } from 'vue-router'
import TodosMain from '@/components/pages/TodosMain'
import TaskEditPage from '@/components/pages/TaskEditPage'

const routes = [
   {
      name: 'home',
      path: `/`,
      component: TodosMain,
   },
   {
      name: 'editPage',
      path: '/task/:id',
      component: TaskEditPage,
   },
]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL),
})

export default router
