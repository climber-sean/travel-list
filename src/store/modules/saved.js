const state = {
    savedDest: [],
    successStatus: null
}

const getters = {
    savedDestinations: state => {
        return state.savedDest;
    },
    success: state => {
        return state.successStatus;
    }
}

const mutations = {
    addToList: (state, data) => {
        state.savedDest.push(data);
        console.log(state.savedDest);
    },
    // Mutation below controls what success message is show
    successMessage: (state, success) => {
        if (success == true) {
            state.successStatus = true;
        } else {
            state.successStatus = false;
        }
    }
}

const actions = {
    saveDestination: ({commit, state, rootState}, index) => {
        let data = rootState.search.sortedInfo[index];
        let i;
        let check = false;
        // Checks to see if destination exists in SavedDest array
        if (state.savedDest.length > 0) {
            for (i = 0; i < state.savedDest.length; i++) {
                if (state.savedDest[i].name === data.name) {
                    check = true; // Change check to true if destination exists
                };
            }
        }
        if (check === false) { // Push new destination to array if doesnt exist
            commit('addToList', data);
            commit('successMessage', true);
        } else {
            commit('successMessage', false); 
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}