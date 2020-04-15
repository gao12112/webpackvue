import Vue from "vue"
import Vuex from "vuex"
import persistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie"

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [persistedState()],
  // plugins: [persistedState({ storage: window.sessionStorage })],
  plugins: [
    persistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7000 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
    shopid: 1,
    token: ""
  },
  mutations: {},
  actions: {},
  modules: {}
})
