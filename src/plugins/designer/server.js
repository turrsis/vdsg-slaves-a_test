const adminSlaveServer = require('admin-server-common').directives.installer
const config = require('./config.js')

adminSlaveServer.setConfig(config.metaconfig.getServerConfig())
module.exports = {
    chainWebpack: adminSlaveServer.installToVueCli
}