const institu = {
  state: {
    instituTitle: '',
    instituDialog: false,
    instituForm: {},
    groupTitle: '',
    groupDialog: false,
    groupForm: {},
    userTitle: '',
    userDialog: false,
    userForm: {}
  },
  mutations: {
    SET_INSTITUTITLE: (state, title) => {
      state.instituTitle = title
    },
    SET_INSTITUDIALOG: (state, flag) => {
      state.instituDialog = flag
    },
    SET_INSTITUFORM: (state, data) => {
      state.instituForm = JSON.parse(JSON.stringify(data))
    },
    SET_GROUPTITLE: (state, title) => {
      state.groupTitle = title
    },
    SET_GROUPDIALOG: (state, flag) => {
      state.groupDialog = flag
    },
    SET_GROUPFORM: (state, data) => {
      state.groupForm = JSON.parse(JSON.stringify(data))
    },
    SET_USERTITLE: (state, title) => {
      state.userTitle = title
    },
    SET_USERDIALOG: (state, flag) => {
      state.userDialog = flag
    },
    SET_USERFORM: (state, data) => {
      state.userForm = JSON.parse(JSON.stringify(data))
    }
  },
  actions: {
    SetInstituTitle ({ commit }, title) {
      commit('SET_INSTITUTITLE', title)
    },
    SetInstituDialog ({ commit }, flag) {
      commit('SET_INSTITUDIALOG', flag)
    },
    SetInstituForm ({ commit }, data) {
      commit('SET_INSTITUFORM', data)
    },
    SetGroupTitle ({ commit }, title) {
      commit('SET_GROUPTITLE', title)
    },
    SetGroupDialog ({ commit }, flag) {
      commit('SET_GROUPDIALOG', flag)
    },
    SetGroupForm ({ commit }, data) {
      commit('SET_GROUPFORM', data)
    },
    SetUserTitle ({ commit }, title) {
      commit('SET_USERTITLE', title)
    },
    SetUserDialog ({ commit }, flag) {
      commit('SET_USERDIALOG', flag)
    },
    SetUserForm ({ commit }, data) {
      commit('SET_USERFORM', data)
    }
  }
}

export default institu