// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts//图表
import Login from './components/pages/install/Login'//安装人员登陆
import MerLogin from './components/pages/Merchant/Login'//商户登陆
import Count from './components/pages/Merchant/Count'//商户统计
import DeviceList from './components/pages/install/DeviceList'
import AddDevice from './components/pages/install/AddDevice'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/AddDevice',
        name:'AddDevice',
        component: AddDevice
    },
    {
        path: '/DeviceList',
        name:'DeviceList',
        component: DeviceList
    },
    {
        path: '/MerLogin',
        name:'MerLogin',
        component: MerLogin
    },
    {
        path: '/Count',
        name:'Count',
        component: Count
    },

]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
