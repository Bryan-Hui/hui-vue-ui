import Vue from 'vue'
import App from './App.vue'
import hUi from '../packages'

Vue.config.productionTip = false
Vue.use(hUi)


new Vue({
  render: h => h(App),
}).$mount('#app')
