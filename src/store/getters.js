const getters = {
  token: state => state.user.token,
  sidebar: state => state.app.sidebar,
  fontsize: state => state.app.fontsize,
  historyTabs: state => state.common.historyTabs,
  historyList: state => state.common.historyList,
  skin: state => JSON.parse(state.app.skin),
  loading: state => state.app.loading,
  instituTitle: state => state.system.instituTitle,
  instituDialog: state => state.system.instituDialog,
  instituForm: state => state.system.instituForm,
  groupTitle: state => state.system.groupTitle,
  groupDialog: state => state.system.groupDialog,
  groupForm: state => state.system.groupForm,
  userTitle: state => state.system.userTitle,
  userDialog: state => state.system.userDialog,
  userForm: state => state.system.userForm,
  stitution: state => state.getdata.stitution,
  group: state => state.getdata.group
}
export default getters