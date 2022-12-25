const state = {
    language: ''
}

const mutations = {
    SET_LANGUAGE: (state, language) => {
        state.language = language
    }
}

const actions = {
    setLanguage: ({ commit }, language) => {
        commit('SET_LANGUAGE', language);
    }
}

export default {
    state,
    mutations,
    actions
};