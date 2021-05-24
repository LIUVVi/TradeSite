import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/home/Home')
const Mine = () => import('@/views/mine/Mine')
const AddPolicy = () => import('@/views/addpolicy/AddPolicy')
const HomeTransactions = () => import('@/views/home/HomeTransactions')
const HomeMarket = () => import('@/views/home/HomeMarket')
const Details = () => import('@/views/details/Details')
const Login = () => import('@/views/sign/Login')
const About = () => import('@/views/about/About')
const routes = [
  {
    path: '/',
    redirect: '/home/market'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'trans',
        component: HomeTransactions
      },
      {
        path: 'market',
        component: HomeMarket
      },
    ]
  },
  {
    path: '/addpolicy',
    component: AddPolicy,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/details/:id',
    component: Details
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
