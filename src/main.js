import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VCalendar from 'v-calendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle, faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import { appStore } from './store/store';
import { routes } from './routes';

Vue.use(VueRouter);

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
