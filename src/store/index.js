import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import common from './modules/common'
import system from './modules/system'
import getdata from './modules/getdata'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    common,
    system,
    getdata
  },
  getters
})

export default store