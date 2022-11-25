import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    userMoule: users
  },
  state: {
    loader: false
  },
  mutations: {
    Loader (state, newValue) {
      state.loader = newValue
    }
  }
})
