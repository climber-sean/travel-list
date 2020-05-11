import Vue from 'vue';
import Vuex from 'vuex';

import search from './modules/search';
import saved from './modules/saved';
import hotel from './modules/hotel'

Vue.use(Vuex);

export const appStore = new Vuex.Store({
    state: {
        testState: 'This is a string'
    },
    modules: {
        search,
        saved,
        hotel
    },
});