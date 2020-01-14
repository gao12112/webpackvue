<template>
  <div class="request">{{post}}</div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name: "request",
  data: function () {
    return {
      post: 111
    }
  },
  components: {
    HelloWorld
  }
}
</script>
