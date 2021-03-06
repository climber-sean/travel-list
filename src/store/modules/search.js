import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    // Stores the results of the search
    sortedInfo: [],
    searchStatus: false,
    currentReview: [],
    reviewStatus: false
}

const getters = {
    // Returns search results
    searchResult: state => {
        return state.sortedInfo;
    },
    searchStatus: state => {
        return state.searchStatus;
    },
    reviewResult: state => {
        return state.currentReview;
    },
    reviewStatus: state => {
        return state.reviewStatus
    }
}

const mutations = {
    // Sorts search results into just the geographical location
    // Pushed the to the sortedInfo array to hold search results
    setSearch: (state, response) => {
        if (response !== null) {
            response.data.data.forEach(element => {
                if (element.result_type === 'geos' || element.result_type === 'things_to_do') {
                    state.sortedInfo.push(element.result_object);
                }
            });
        }
    },
    setSearchStatus: state => {
        state.searchStatus = true;
    },
    setReview: (state, response) => {
        state.reviewStatus = false;
        if (response !== null) {
            response.data.data.forEach(element => {
                state.currentReview.push(element);
            });
        }
    },
    setReviewStatus: state => {
        state.currentReview = [];
        state.reviewStatus = true;
    }
}

const actions = {
    // API CALL
    locationSearch({commit}, payload) {
        commit('setSearchStatus');
        state.sortedInfo = [];
        Vue.prototype.$http.get('https://tripadvisor1.p.rapidapi.com/locations/search', {
            headers: 
            { "X-RapidApi-Host" : "tripadvisor1.p.rapidapi.com",
                "X-RapidApi-Key": "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII"
            },
            params: {
                "query": payload
            }
        }).then(response => {
            commit('setSearch', response);
        });
    },
    showReviews: ({commit}, payload) => {
        commit('setReviewStatus');
        Vue.prototype.$http.get('https://tripadvisor1.p.rapidapi.com/reviews/list', {
            headers: {
                "X-RapidApi-Host" : "tripadvisor1.p.rapidapi.com",
                "X-RapidApi-Key": "LxX7ezO7o9mshQTSmxDDbxkYdumap1RHxMgjsnit8M8qw3jJII"
            },
            params: {
                "location_id" : payload,
                "limit": "15"
            }
        }).then(response => {
            commit('setReview', response);
        })
    },
    getDestination: (state, index) => {
        console.log(state.sortedInfo[index]);
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}