// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
// import axios from "axios"
import {get, post} from "@/request/http"
import { Button, Cell, CellGroup, Toast } from "vant"
// Vue.use(axios)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)

Vue.config.productionTip = false
// Vue.prototype.$axios = axios

Vue.prototype.$get = get
Vue.prototype.$post = post
// Vue.prototype.$post = post
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
