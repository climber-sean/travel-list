import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    hotelName: '',
    destinationID: '',
    showHotelModal: false
}

const getters = {
    hotelModal: (state) => {
        return state.showHotelModal
    },
    hotelName: (state) => {
        return state.hotelName
    }
}

const mutations = {
    setDestinationID: (state, response) => {
        state.destinationID = response;
        console.log(state.destinationID);
    },
    setHotels: (state, response) => {
        console.log(response)
    }
}

const actions = {

    getDestinationID: ({commit, state}, payload) => {
        state.hotelName = payload;
        state.showHotelModal = !state.showHotelModal;
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
    getHotels: ({commit, state}, payload) => {
        Vue.prototype.$http.get('https://hotels3.p.rapidapi.com/properties/list', {
            headers: {
                "X-RapidApi-Host" : "hotels4.p.rapidapi.com",
                "X-RapidApi-Key" : "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII",
                "useQueryString": true
            },
            params: {
                "destinationId" : state.destinationID,
                "pageNumber" : "1",
                "checkIn" : payload.checkin,
                "checkOut" : payload.checkout,
                "adults1" : payload.adults
            }
        }).then(response => {
            commit('setHotels', response)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}