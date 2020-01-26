import Vue from "vue"
import Router from "vue-router"
import Home from "../views/Home.vue"
Vue.use(Router)

export default new Router({
  // history: true,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/request",
      name: "request",
      component: () => import("@/views/request.vue")
    },
    {
      path: "/reload",
      name: "reload",
      component: () => import("@/views/reload.vue")
    },
    {
      path: "/vant",
      name: "vant",
      component: () => import( /* webpackChunkName: "vant" */ "../views/vant.vue")
    },
    {
      path: "/vant/botton",
      name: "vant_botton",
      component: () => import( /* webpackChunkName: "about" */ "../views/vant/botton.vue")
    },
    {
      path: "/vant/cell",
      name: "vant_cell",
      component: () => import( /* webpackChunkName: "about" */ "../views/vant/cell.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/empty",
      name: "empty",
      component: () => import( /* webpackChunkName: "about" */ "../views/Empty.vue")
    }
  ]
})
