const { defineConfig } = require('@vue/cli-service')
const path = require('path');



module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },

  chainWebpack: config => { //对所有packages中的js做babel处理;
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改其他的选项;
        return options;
      })
  }

})
