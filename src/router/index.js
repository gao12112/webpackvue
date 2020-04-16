import Vue from "vue"
import Router from "vue-router"
// import Home from "../views/Home.vue"
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue")
  }, {
    path: "/wap",
    name: "wap",
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () => import(/* webpackChunkName: "about" */ "@/views/wap/index.vue")
  },
  {
    path: "/wap/login",
    name: "/wap/login",
    component: () => import(/* webpackChunkName: "about" */ "@/views/wap/login.vue")
  },
  {
    path: "/request",
    name: "request",
    component: () => import(/* webpackChunkName: "about" */ "@/views/request.vue")
  },
  {
    path: "/reload",
    name: "reload",
    component: () => import(/* webpackChunkName: "about" */ "@/views/reload.vue")
  },
  {
    path: "/vant",
    name: "vant",
    component: () => import(/* webpackChunkName: "vant" */ "../views/vant.vue")
  },
  {
    path: "/vant/botton",
    name: "vant_botton",
    component: () => import(/* webpackChunkName: "about" */ "../views/vant/botton.vue")
  },
  {
    path: "/vant/cell",
    name: "vant_cell",
    component: () => import(/* webpackChunkName: "about" */ "../views/vant/cell.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/empty",
    name: "empty",
    component: () => import(/* webpackChunkName: "about" */ "../views/Empty.vue")
  },
  {
    path: "/vue2toast",
    name: "vue2toast",
    component: () => import(/* webpackChunkName: "about" */ "../views/vue2toast.vue")
  },
  {
    path: "/mock",
    name: "mock",
    component: () => import(/* webpackChunkName: "about" */ "../views/mock.vue")
  },
  {
    path: "/pxRem",
    name: "pxRem",
    component: () => import(/* webpackChunkName: "about" */ "../views/pxRem.vue")
  }
  ]
})
