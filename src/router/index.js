import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载模块
const Home = () => import('../views/home/Home')
const Hot = () => import('../views/hot/Hot')
const Msg = () => import('../views/msg/Msg')
const User = () => import('../views/user/User')

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/hot', component: Hot },
    { path: '/msg', component: Msg },
    { path: '/user', component: User },
]
const router = new VueRouter({
    routes
})

// 解决重复点报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router