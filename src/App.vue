<template>
  <div id="app">
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
    },
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  mounted () {
    if (this._isMobile()) {
      // console.log(11)
      // this.$router.replace("/wap")
    } else {
      // console.log(12)
      // this.$router.replace("/")
    }
    // console.log(this.$route)
    // console.log(this.$route.query)
    // console.log(this.$route.params)
    // var id = this.$route.query.id
    // console.log(id)
    // console.log(11)
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
