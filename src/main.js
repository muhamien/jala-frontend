import Vue from 'vue'
import App from './App.vue'
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import router from './router'

Vue.use(Chakra)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(CThemeProvider, [h(App)])
}).$mount('#app')
