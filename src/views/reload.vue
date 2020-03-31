<template>
  <div class="reload">
    <div>
<van-button @click="toreload()">刷新页面1</van-button> (此情况页面会出现白屏闪烁)
</div>

<br/>
<div>
  <input type="text">
</div>
  <div>
<van-button @click="rereload()">刷新页面2</van-button> (此刷新页面无感知) <a target="_target" href="https://segmentfault.com/a/1190000017007631">链接 </a>

</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "reload",
  inject: ["reload"],
  components: {
  },
  created () {

  },
  methods: {
    toreload () {
      location.reload()
    },
    rereload () {
      let slef = this
      slef.reload()
    }
  },
  computed: {

  },
  watch: {

  }

}
</script>
