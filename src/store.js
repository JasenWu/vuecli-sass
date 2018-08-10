import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 2
  },
  mutations: {
    increase (state) {
      state.name++
    },
    decrease (state) {
      state.name--
    }
  },
  actions: {

  }
})
