import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    hotelName: '',
    destinationID: '',
    showHotelModal: false,
    showHotelForm: false,
    showHotelResults: false,
    hotelsList: []
}

const getters = {
    hotelModal: (state) => {
        return state.showHotelModal
    },
    hotelName: (state) => {
        return state.hotelName
    },
    hotelForm: (state) => {
        return state.showHotelForm
    },
    hotelResult: (state) => {
        return state.showHotelResults
    },
    hotelList: (state) => {
        return state.hotelsList
    }
}

const mutations = {
    setDestinationID: (state, response) => {
        state.destinationID = response;
        state.showHotelForm = !state.showHotelForm
        console.log(state.destinationID);
    },
    setHotels: (state, response) => {
        response.data.data.body.searchResults.results.forEach(element => {
            state.hotelsList.push(element);
        });
        state.showHotelResults = !state.showHotelResults;
        console.log(state.hotelsList);
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
        state.showHotelForm = !state.showHotelForm
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