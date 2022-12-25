import { removeToken, removeUserName } from '@/utils/cookies.js';
import { removeWatermark } from '@/plugin/watermark.js'
const state = {
    userName: ''
}

const mutations = {
    SET_USERNAME: (state, name) => {
        state.userName = name
    },
    LOGOUT: (state) => {
        state.userName = null
    }
}

const actions = {
    setUserName: ({ commit }, name) => {
        commit('SET_USERNAME', name);
    },
    logout: ({ commit }) => {
        return new Promise((resolve, reject) => {
            commit('LOGOUT');
            removeUserName()
            removeToken()
            removeWatermark()
            resolve()
        })
    }
}

export default {
    state,
    mutations,
    actions
};