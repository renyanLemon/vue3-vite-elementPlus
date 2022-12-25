import { themeConfig } from '@/config/theme';

const { collapse, logoColor, logoBackgroundColor, headerBackgroundColor } = themeConfig;

const state = {
    collapse,
    logoColor,
    logoBackgroundColor,
    headerBackgroundColor
}

const mutations = {
    CHANGE_COLLAPSE: (state) => {
        state.collapse = !state.collapse;
    },
    SET_LOGOCOLOR: (state, color) => {
        state.logoColor = color;
    },
    SET_LOGOBACKGROUNDCOLOR: (state, color) => {
        state.logoBackgroundColor = color;
    },
    SET_HEADERBACKGROUNDCOLOR: (state, color) => {
        state.headerBackgroundColor = color;
    },
}

const actions = {
    /**
     * @description 切换展开收起
     */
    changeCollapse: ({ commit }) => {
      commit('CHANGE_COLLAPSE');
    },
    /**
     * @description logo文本颜色
     */
    setLogoColor: ({ commit }, color) => {
        commit('SET_LOGOCOLOR', color);
    },
    /**
     * @description logo背景颜色
     */
     setLogoBackgroundColor: ({ commit }, color) => {
        commit('SET_LOGOBACKGROUNDCOLOR', color);
    },
     /**
     * @description header背景颜色
     */
      setHeaderBackgroundColor: ({ commit }, color) => {
        commit('SET_HEADERBACKGROUNDCOLOR', color);
    },
}

export default {
    state,
    mutations,
    actions
};