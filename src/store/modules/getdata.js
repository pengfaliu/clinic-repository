import { queryAllGroup } from '@/api/group'
import { allInstitu } from '@/api/stitution'
const getdata = {
  state: {
    stitution: {},
    group: {}
  },
  mutations: {
    SET_MECHANISM: (state, data) => {
      state.stitution = data
    },
    SET_GROUP: (state, data) => {
      state.group = data
    }
  },
  actions: {
    GetMechanism ({ commit }) {
      allInstitu().then(res => {
        if (res && res.data.code === 200) {
          commit('SET_MECHANISM', res.data.data)
        }
      })
    },
    GetGroup ({ commit }) {
      queryAllGroup().then(res => {
        if (res && res.data.code === 200) {
          commit('SET_GROUP', res.data.data)
        }
      })
    }
  }
}

export default getdata