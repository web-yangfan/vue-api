import Vue from 'vue'
import vue2 from './vue2.vue'

// 来关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(vue2)
})
