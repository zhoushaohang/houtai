// 配置路由相关信息
import Vue from 'vue'
// 在使用路由前.导入路由插件
import VueRouter from 'vue-router'
// import router from './router'
// 引入组件
import yu from '../views/404'
import rio from '../views/403.vue'
import Home from '../../Home'
import dashboard from '../views/dashboard'
import exception from '../views/exception'
import Form from '../views/form'
import List from '../views/list'
import Other from '../views/other'

//1, 通过Vue.use(插件)来安装插件
Vue.use(VueRouter)
//2, 创建路由对象

const routes = [
  // 关系就是一个对象
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/404',
    name: '404',
    component: yu
  },
  {
    path: '/403',
    name: '403',
    component: rio
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/exception',
    name: 'exception',
    component: exception
  },

  
  {
    path: '/Form',
    mame: 'Form',
    component: Form
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/Other',
    name: 'Other',
    component: Other
  },
  {
    path: '/Text',
    name: 'Text',
    component: Text
  }
]
// 3,将router对象传入(挂载到)vue实例中.所以在这里导出

// hack router push callback
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
})

// 导出路由
export default router;