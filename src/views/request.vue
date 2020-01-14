<template>
  <div class="request">{{post}}</div>
</template>
<script>
// import axios from "axios"
import HelloWorld from "@/components/HelloWorld.vue" // api 即上面 vue.config.js 中配置的地址

import { apiAddress } from "@/request/api"

export default {
  name: "request",
  data: function () {
    return {
      post: 111
    }
  },
  components: {
    HelloWorld
  },
  created () {
    // apiAddress({
    //   type: 0,
    //   sort: 1
    // }).then(res => {

    // })

    this.$post("/api/index/index", {

    })
      .then(function (response) {
        console.log(response)
      // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
      })
  }

}
</script>
