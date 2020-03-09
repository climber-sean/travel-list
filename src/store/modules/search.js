import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    // Stores the results of the search
    sortedInfo: [],
    searchStatus: 'Search results...'
}

const getters = {
    // Returns search results
    searchResult: state => {
        return state.sortedInfo;
    },
    searchStatus: state => {
        return state.searchStatus
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
        console.log(state.sortedInfo);
    },
    setSearchStatus: state => {
        state.searchStatus = 'Searching...';
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