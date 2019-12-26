import router from '@/router'
const common = {
  state: {
    historyTabs: {
      historyList: [],
      activeName: ''
    },
    historyList: []
  },
  mutations: {
    SET_HISTORY: (state, list) => {
      // var curList = state.historyTabs.historyList.find(val => val.id === list.id)
      // if (!curList) {
      //   list.index = state.historyTabs.historyList.length + ''
      //   state.historyTabs.historyList.push(list)
      //   state.historyTabs.activeName = list.index
      // } else {
      // }
      state.historyList = list
      router.push({name: 'info'})
    },
    EDIT_HISTORY: (state, name) => {
      state.historyTabs.activeName = name;
      state.historyTabs.historyList = state.historyTabs.historyList.filter(tab => tab.index !== name);
      if (state.historyTabs.historyList.length === 0) {
        router.push({name: 'diseaseproof'})
      }
    }
  },
  actions: {
    SetHistory ({ commit }, list) {
      commit('SET_HISTORY', list)
    },
    EditHistory ({ commit }, name) {
      commit('EDIT_HISTORY', name)
    }
  }
}

export default common