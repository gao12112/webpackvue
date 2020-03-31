<template>
  <div class="mock">
    mock 数据请看控制台
  </div >
</template>
<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    requestData () {
      this.$axios.get("/apii/articles")
        .then(e => {
          // console.log(e)
          let data = e.data
          if (data.data && Array.isArray(data.data)) {
            this.articles = data.data
          }
          console.log(this.articles)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.requestData()
  }
}
</script>
