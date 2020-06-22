import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import apolloClient from './utils/apolloClient'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount('#app')
