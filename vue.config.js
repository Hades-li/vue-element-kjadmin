'use strict'
const path =  require('path')
const port = 8899 // dev port

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      api: {
        target: `http://localhost:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      /*'fsc':{
        target: `http://dev.mgr.maohd.com/`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }*/
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/assets/themes/main/element-variables.scss";

        `
      }
    }
  },
  configureWebpack: config => {

  },
  chainWebpack (config) {
    config.module
      .rule('md')
      .test(/\.md$/)
        .use('html')
        .loader('html-loader')
        .end()
        .use('md')
        .loader(resolve('./build/md-loader/index.js'))
        .end()

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
  }
}
