import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseInput from "@/components/BaseInput";
import BaseForm from "@/components/BaseForm";

import './assets/normalize.css'

Vue.config.productionTip = false
Vue.component('BaseForm', BaseForm)
Vue.component('BaseInput', BaseInput)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
