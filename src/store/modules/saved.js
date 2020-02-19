const state = {
    savedDest: []
}

const getters = {
    getDestination: ( state, getters, rootState, rootGetters ) => {
        return rootState.search
    }
}

const mutations = {
    saveDestination: (index) => {
        console.log(getters.getDestination());
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}