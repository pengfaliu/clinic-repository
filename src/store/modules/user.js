import { getToken, setToken, removeToken } from '@/utils/auth'
import { setStore, getStore, removeStore } from '@/utils/store'
const user = {
  state: {
    token: getStore({name: 'token'})
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setStore({
        name: 'token',
        content: token.token,
        type: false,
        dateTime: token.checked
      })
      state.token = token.token
    },
    REMOVE_TOKEN: (state) => {
      removeStore({name: 'token'})
      state.token = ''
    }
  },
  actions: {
    SetToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    RemoveToken ({ commit }) {
      commit('REMOVE_TOKEN')
    }
  }
}

export default user