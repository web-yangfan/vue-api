import Vue from 'vue'
import index from './index.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<index/>',
  components: { index }
})
