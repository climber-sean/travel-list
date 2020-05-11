import Vue from 'vue'
// import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router';
import VCalendar from 'v-calendar';

import { appStore } from './store/store';
import { routes } from './routes';

// Vue.prototype.$http = axios;
Vue.use(VueRouter);

// export const searchBus = new Vue();

const router = new VueRouter({
  routes
})

Vue.use(VCalendar)

new Vue({
  el: '#app',
  store: appStore,
  router,
  render: h => h(App)
})
