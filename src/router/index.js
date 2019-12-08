import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Product = () => import('views/product/Product')
const ViewPoint = () => import('views/viewpoint/ViewPoint')
const ShowInfo = () => import('views/showInfo/ShowInfo')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/food',
    component: Product
  },
  {
    path: '/yandangshan',
    component: ViewPoint
  },
  {
    path: '/nanxijiang',
    component: ViewPoint
  },
  {
    path: '/showInfo',
    component: ShowInfo
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/profile',
    component: Profile
  }
]


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
