const adminSlaveServer = require('admin-server-common').directives.installer
// X-Frame-Options
// Access-Control-Allow-Origin
// Access-Control-Allow-Credentials: true
//'Content-Security-Policy': "Content-Security-Policy: default-src 'self'; *;"
module.exports = {
  chainWebpack: adminSlaveServer.installToVueCli,
  configureWebpack: {
    //devtool: '#eval-source-map' // 'source-map'
  },
  devServer: {
    host: 'localhost',
    port: 8086,
  }
}
