import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
//@符代表src的路径，省的以后通过../../../来找src/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
