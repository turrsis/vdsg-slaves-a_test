const server = require('./src/plugins/designer/server.js')
// 
/*
  ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js?5c40
        5935 - patchChildren
        6008 - patchKeyedChildren
        5238 - patch
        5613 - processFragment
        *5419 - patchKeyedChildren
*/
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
