// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
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

Vue.use(VCalendar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: appStore,
  router,
  components: { App },
  template: '<App/>'
})
