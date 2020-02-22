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
        commit('addToList', data);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}