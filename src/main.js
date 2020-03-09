import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import {store} from './store/store';

Vue.config.productionTip = false
Vue.use(VueResource);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
