const vueConfig = {
  devServer: {
    // development server port 8000
    port: 8010
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/api': {
    //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },
  productionSourceMap: false
}

module.exports = vueConfig