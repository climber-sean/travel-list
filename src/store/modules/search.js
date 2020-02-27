import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const state = {
    // Stores the results of the search
    sortedInfo: [],
}

const getters = {
    // Returns search results
    searchResult: state => {
        return state.sortedInfo;
    }
}

const mutations = {
    // Sorts search results into just the geographical location
    // Pushed the to the sortedInfo array to hold search results
    setSearch: (state, response) => {
        console.log(response);
        if (response !== null) {
            response.data.data.forEach(element => {
                if (element.result_type === 'geos') {
                    state.sortedInfo.push(element.result_object);
                }
            });
        }
    },
}

const actions = {
    // API CALL
    locationSearch({commit}, payload) {
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