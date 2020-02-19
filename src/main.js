import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import { appStore } from './store/store';

Vue.prototype.$http = axios;

export const searchBus = new Vue();

new Vue({
  el: '#app',
  store: appStore,
  render: h => h(App)
})
