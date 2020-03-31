<template>
  <div id="toastbox">
      <button @click="openTop()">top</button>
        <button @click="openCenter()">center</button>
        <button @click="openBottom()">bottom</button>
        <button @click="openLoading()">loading</button>
  </div>
</template>
<script>
import Vue from "vue"
import "vue2-toast/lib/toast.css"
import Toast from "vue2-toast"
Vue.use(Toast)
export default {
  methods: {
    openTop () {
      this.$toast.top("top")
    },
    openCenter () {
      this.$toast.center("center")
    },
    openBottom () {
      this.$toast("bottom") // or this.$toast.bottom('bottom');
    },
    openLoading () {
      this.$loading("loading...")
      let self = this
      setTimeout(function () {
        self.closeLoading()
      }, 2000)
    },
    closeLoading () {
      this.$loading.close()
    }
  }
}
</script>
