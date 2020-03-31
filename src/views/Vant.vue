<template>
  <div class="vant">
    <div><router-link :to="{ name: 'vant_botton'}">按钮</router-link></div>
    <div><router-link :to="{ name: 'vant_cell'}">Cell 单元格</router-link></div>

    <button @click="totast()">弹出框</button>
  </div>
</template>
<script>
export default {
  methods: {
    totast: function () {
      this.$toast("提示文案")
    }
  }
}
</script>
