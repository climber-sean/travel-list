import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    hotelName: '',
    destinationID: '',
    hotelCheckIn: null,
    hotelCheckOut: null,
    hotelAdults: '',
    showHotelModal: false,
    showHotelForm: false,
    showHotelResults: false,
    showHotelInfo: false,
    hotelsList: [],
    hotelInfo: {},
    hotelPhotos: ''
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
    },
    hotelInfo: (state) => {
        return state.showHotelInfo
    },
    hotel: (state) => {
        return state.hotelInfo
    },
    hotelPhotos: (state) => {
        return state.hotelPhotos
    },
    hotelBookingLink: (state) => {
        return [state.destinationID, state.hotelCheckIn, state.hotelCheckOut, state.hotelAdults]
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
    },
    getHotel: (state, response) => {
        state.hotelInfo = response;
        state.showHotelInfo = !state.showHotelInfo
        console.log(state.hotelInfo);
        console.log(state.showHotelInfo);
    },
    setHotelPhotos: (state, response) => {
        state.hotelPhotos = response;
        console.log(state.hotelPhotos);
    },
    toggleHotelModal: (state) => {
        state.showHotelModal = !state.showHotelModal;
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
        state.showHotelForm = !state.showHotelForm;
        state.hotelCheckIn = payload.checkin;
        state.hotelCheckOut = payload.checkout;
        state.hotelAdults = payload.adults;
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
    },
    getHotelInfo: ({commit, state}, payload) => {
        state.showHotelResults = !state.showHotelResults
        Vue.prototype.$http.get('https://hotels4.p.rapidapi.com/properties/get-details', {
            headers: {
                "X-RapidApi-Host" : "hotels4.p.rapidapi.com",
                "X-RapidApi-Key" : "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII",
                "useQueryString": true
            },
            params: {
                "id": payload
            }
        }).then(response => {
            commit('getHotel', response.data.data)
            Vue.prototype.$http.get('https://hotels4.p.rapidapi.com/properties/get-hotel-photos', {
                headers: {
                    "X-RapidApi-Host" : "hotels4.p.rapidapi.com",
                    "X-RapidApi-Key" : "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII",
                    "useQueryString": true
                },
                params: {
                    "id": payload
                }
            }).then(response => {
                commit('setHotelPhotos', response);
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}