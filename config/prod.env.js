'use strict'
module.exports = {
  NODE_ENV: '"production"',
  Mock:false,
  proxy:{
    '/api': {
      target: '"http://www.slkc.com"',  //目标接口域名
      secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
    }
  }
}
