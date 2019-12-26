import { getToken, setToken, removeToken } from '@/utils/auth'
import { setStore, getStore, removeStore } from '@/utils/store'
const user = {
  state: {
    token: getToken(),
    url: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token.token)
      state.token = token.token
    },
    REMOVE_TOKEN: (state) => {
      removeToken()
      state.token = ''
    },
    SET_URL: (state, url) => {
      state.url = url
    }
  },
  actions: {
    SetToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    RemoveToken ({ commit }) {
      commit('REMOVE_TOKEN')
    },
    SetUrl ({ commit }, url) {
      commit('SET_URL', url)
    }
  }
}

export default user