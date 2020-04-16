<template>
  <div class="home">
    <div id="nav">
      <router-link :to="{ name: 'home'}">Home</router-link> |
      <router-link :to="{ name: 'vant'}">vant</router-link> |
      <router-link :to="{ name: 'request'}">request请求</router-link> |
      <router-link :to="{ name: 'reload'}">页面刷新</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name:'vue2toast'}">弹出框</router-link>|

      <router-link :to="{ name:'mock'}">mock数据</router-link>|
      <router-link :to="{ name:'pxRem'}">px转rem</router-link>|

          <router-link :to="{ name:'wap'}">wap</router-link>|
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name: "home",
  components: {
    HelloWorld
  }
}
</script>
