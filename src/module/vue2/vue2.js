import Vue from 'vue'
import vue2 from './vue2.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(vue2)
})

