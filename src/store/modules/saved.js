const state = {
    savedDest: []
}

const getters = {
    savedDestinations: state => {
        return state.savedDest;
    }
}

const mutations = {
    addToList: (state, data) => {
        state.savedDest.push(data);
        console.log(state.savedDest);
    }
}

const actions = {
    saveDestination: ({commit, state, rootState, rootGetters}, index) => {
        console.log(rootState.search.sortedInfo);
        let data = rootState.search.sortedInfo[index];
        var i;
        var check = 'false';
        if (state.savedDest.length > 0) {
            for (i = 0; i <= rootState.search.sortedInfo.length; i++) {
                if (state.savedDest[i].name === data.name) {
                    check = 'true';
                };
            }
        }
        if (check === 'false') {
            commit('addToList', data);
        } else {
            alert('ERROR');
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}