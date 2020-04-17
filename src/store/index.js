import Vue from "vue"
import Vuex from "vuex"
import router from "../router"
import persistedState from "vuex-persistedstate"
import * as Cookies from "js-cookie"

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true, //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  // plugins: [persistedState()],
  // plugins: [persistedState({ storage: window.sessionStorage })],
  plugins: [
    persistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 70000 }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
    id: "",
    token: "",
    list: {}
  },
  mutations: {
    setid (state, id) {
      state.id = id
    },
    settoken (state, token) {
      state.token = token
    },
    setlist (state, data) {
      var array = state.list
      array["id" + data.id] = {"id": data.id, "token": data.token}
      state.list = array
    }
  },
  actions: {
    changeId ({ commit, state }, id) {
      var list = state.list
      if (list["id" + id] !== undefined) {
        commit("setid", id)
        commit("settoken", list["id" + id].token)
      } else {
        router.replace({
          path: "/wap/login",
          query: {redirect: router.currentRoute.fullPath, id: id}
        })
      }
    },
    createId ({ commit, state }, data) {
      console.log(data)
      commit("setid", data.id)
      commit("settoken", data.token)
      commit("setlist", data)
      router.replace(data.redirect)
    }
  },
  modules: {}
})
