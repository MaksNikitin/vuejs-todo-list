import Vue from 'vue'

import App from './App'
import vuetify from './plugins/vuetify';

new Vue({
  render: h => h(App),
  components: { App },
  vuetify,
}).$mount('#app')
