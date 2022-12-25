const state = {
    permissionRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.permissionRoutes = routes
    }
}

const actions = {
    setRoutes: ({ commit }, routes) => {
        commit('SET_ROUTES', routes);
    }
}



export default {
    state,
    mutations,
    actions
};