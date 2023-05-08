import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteNew from '../views/estudiantes/EstudianteNew.vue'
import EstudianteEdit from '../views/estudiantes/EstudianteEdit.vue'
import EstudianteView from '../views/estudiantes/EstudianteView.vue'
import EstudianteList from '../views/estudiantes/EstudianteList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listarE',
    name: 'listarE',
    component: EstudianteList
  },
  {
    path: '/createE',
    name: 'createE',
    component: EstudianteNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: EstudianteEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: EstudianteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
