import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VCalendar from 'v-calendar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Button from './shared/Button';
import CloseButton from './shared/CloseButton';

Vue.component('app-close-button', CloseButton);
Vue.component('app-button', Button);

library.add(faCheckCircle, faTimesCircle, faTimes);

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
