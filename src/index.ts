import Vue from 'vue'

import App from './App'
import vuetify from './plugins/vuetify';
import store from './store';

new Vue({
  render: h => h(App),
  components: { App },
  vuetify,
  store,
}).$mount('#app')
