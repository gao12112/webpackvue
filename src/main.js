// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import * as axios from "axios"
import {get, post, patch, put} from "@/request/http"
// import { Button, Cell, CellGroup, Toast } from "vant"
import store from "./store/index"

import { Button, Cell, CellGroup, Toast, Field } from "vant"
import "babel-polyfill"
Vue.use(axios)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(Field)
// Vue.use(store)

Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$axios = axios // 默认未封装
/* eslint-disable no-new */

// 向main.js中添加如下代码
process.env.Mock && require("./lib/mock.js") // 开发环境使用mock.js

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (!to.query.id) {
      next("/empty")
      return
    } else {
      if (store.state.id !== to.query.id) {
        store.dispatch("changeId", to.query.id)
        return
      }
    }

    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: "/wap/login",
        query: {redirect: to.fullPath, id: to.query.id} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

new Vue({
  el: "#app",
  router,
  store, // 全部注入
  components: { App },
  template: "<App/>"
})
