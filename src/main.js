// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from './mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import $ from 'jquery'
Vue.config.productionTip = false
Vue.use(Mint)
Vue.prototype.$http=axios
const host = process.env.NODE_ENV === "production" ? "" : "http://1.1.1.1"
/* eslint-disable no-new */
var instance = axios.create({
  baseURL: host
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
