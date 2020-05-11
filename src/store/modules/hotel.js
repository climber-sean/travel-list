import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    destinationID: ''
}

const getters = {

}

const mutations = {
    setDestinationID: (state, response) => {
        state.destinationID = response;
        console.log(state.destinationID);
    }
}

const actions = {

    getDestinationID: ({commit}, payload) => {
        Vue.prototype.$http.get('https://hotels4.p.rapidapi.com/locations/search', {
            headers: {
                "X-RapidApi-Host" : "hotels4.p.rapidapi.com",
                "X-RapidApi-Key": "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII",
                "useQueryString": true
            },
            params: {
                "locale" : "en_US",
                "query": payload
            }
        }).then(response => {
            commit('setDestinationID', response.data.suggestions[0].entities[0].destinationId);
        })
    },
    getHotels: ({commit}, payload) => {
        Vue.prototype.$http.get('https://hotels3.p.rapidapi.com/properties/list')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}