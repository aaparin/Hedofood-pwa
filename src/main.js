import Vue from 'vue'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
import './registerServiceWorker'
import router from './router'
import store from './store'

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VuePageTransition)
