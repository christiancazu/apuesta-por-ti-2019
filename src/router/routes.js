import homePage from './pages/home'
import aboutPage from './pages/about'
import dashboardPage from './pages/dashboard'
import postsPage from './pages/posts'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      homePage, //
      aboutPage,
      dashboardPage,
      postsPage
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
