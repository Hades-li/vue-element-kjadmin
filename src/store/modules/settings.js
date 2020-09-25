import variables from '@/assets/themes/main/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo, isCollapse } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  isCollapse,
  wWidth: 0,
  isXl: 0, // 是否1920*1080
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // if (state.hasOwnProperty(key)) {
    //   state[key] = value
    // }
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  },
  RESIZE: (state, pixel) => {
    if (pixel >= 1920) {
      state.isXl = true
    } else {
      state.isXl = false
    }
    state.wWidth = pixel
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

