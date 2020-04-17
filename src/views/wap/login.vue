<template>
  <div>
    <div @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info"  @click='onSubmit()'>
          提交
        </van-button>
      </div>
   </div>
  </div>
</template>
<script>
import store from "../../store/index"
const crypto = require("crypto")
var md5 = crypto.createHash("md5")
export default {
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    onSubmit () {
      // 请求后得到token
      var id = this.$route.query.id
      var redirect = this.$route.query.redirect
      var token = md5.update(id).digest("hex")
      console.log(token)

      store.dispatch("createId", {id: id, token: token, redirect: redirect})
    }
  }
}
</script>
