<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'vant'}">vant</router-link> |
      <router-link :to="{ name: 'request'}">request请求</router-link> |
      <router-link :to="{ name: 'reload'}">页面刷新</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name:'vue2toast'}">弹出框</router-link>

      <router-link :to="{ name:'mock'}">mock数据</router-link>
    </div>
    <router-view v-if="isRouterAlive" ></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide () {
    // 注入器
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
