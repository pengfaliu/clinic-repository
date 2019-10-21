const getters = {
  token: state => state.user.token,
  sidebar: state => state.app.sidebar,
  fontsize: state => state.app.fontsize,
  historyTabs: state => state.common.historyTabs,
  historyList: state => state.common.historyList,
  skin: state => JSON.parse(state.app.skin)
}
export default getters
