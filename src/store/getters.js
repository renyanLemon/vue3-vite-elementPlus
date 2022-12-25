const getters = {
    language: (state) => state.languages.language,
    collapse: (state) => state.theme.collapse,
    logoColor: (state) => state.theme.logoColor,
    logoBackgroundColor: (state) => state.theme.logoBackgroundColor,
    headerBackgroundColor: (state) => state.theme.headerBackgroundColor,
    permissionRoutes: (state) => state.routes.permissionRoutes,
    userName: (state) => state.userInfo.userName,
}

export default getters;