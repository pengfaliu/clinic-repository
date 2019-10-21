import Cookies from 'js-cookie'
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    fontsize: Cookies.get('fontsize') || '14px',
    skin: Cookies.get('skin') || '{ "name": "#409eff", "label": "默认", "icon": "#fff"  }'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    SET_MENUFONTSIZE: (state, fontsize) => {
      Cookies.set('fontsize', fontsize)
      state.fontsize = fontsize
    },
    SET_SKIN: (state, skin) => {
      skin = JSON.stringify(skin)
      Cookies.set('skin', skin)
      state.skin = skin
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    SetMenuFontSize ({ commit }, fontsize) {
      commit('SET_MENUFONTSIZE', fontsize)
    },
    SetSkin ({ commit }, skin) {
      commit('SET_SKIN', skin)
    }
  }
}

export default app