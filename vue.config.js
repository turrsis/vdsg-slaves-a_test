const server = require('./src/plugins/designer/server.js')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: server.chainWebpack,
  configureWebpack: {
    //devtool: '#eval-source-map' // 'source-map'
    devtool: '#eval-cheap-module-source-map'
  },
  devServer: {
    host: 'localhost',
    port: 8086,
  },
}
