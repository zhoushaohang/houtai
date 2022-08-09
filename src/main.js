import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import * as echarts from 'echarts';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Thehead from '../src/components/Thehead'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


require('./mock')
Vue.use(Antd)
Vue.use(ViewUI)
Vue.prototype.$axios = axios
Vue.prototype.$axios = Thehead
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  router,
  // init localstorage, vuex
  render: h => h(App)
})