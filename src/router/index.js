import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs.vue'
import JobDetails from '../views/JobDetails.vue'
import ErrorPage from '../views/ErrorPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView  
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: 'Details',
      component: JobDetails,
      props: true
    },
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: ErrorPage
    }
  ]
})

export default router
