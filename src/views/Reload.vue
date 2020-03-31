<template>
<div>
    <input type="button" value="加" @click="add">
    <input type="button" value="停" @click="stop">
    <h4>{{ count }}</h4>
    <button @click="refresh">无感刷新</button>
  </div>
</template>
<script>
export default{
  name: "refresh",
  inject: ["reload"],
  data () {
    return {
      count: 0,
      intervalId: null
    }
  },
  methods: {
    refresh () {
      this.reload()
    },
    add () {
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return
      };
      // 计时器为空，操作
      this.intervalId = setInterval(() => {
        this.count += 1
      }, 400)
    },
    stop () {
      clearInterval(this.intervalId)// 清除计时器
      this.intervalId = null// 设置为null
    }
  }
}
</script>
