// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import * as axios from "axios"
import {get, post, patch, put} from "@/request/http"
import { Button, Cell, CellGroup, Toast } from "vant"
import "babel-polyfill"
Vue.use(axios)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$axios = axios // 默认未封装
/* eslint-disable no-new */

// 向main.js中添加如下代码
process.env.Mock && require("./lib/mock.js") // 开发环境使用mock.js

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
