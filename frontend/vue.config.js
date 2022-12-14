const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    devServer: {                //webpack-dev-server配置
      host : 'localhost',
      port : 8080,            //配置本项目运行端口
      proxy: {                //配置代理服务器来解决跨域问题
          '/api': {
              target: 'http://localhost:8000',      //配置要替换的后台接口地址
              changOrigin: true,                      //配置允许改变Origin
              pathRewrite: {
                  '^/api': ''
              }
          },
      }
    },
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
    },

}


