'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Mock:true,
  proxyTable: {
    '/api': {
      target: '"http://localhost:7000"',  //目标接口域名
      secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      // pathRewrite: {
      //   '^/api': '/api'   //重写接口
      // }
    }
  }
})
