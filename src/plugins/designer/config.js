const metaconfig = require('admin-common/MetadataConfig.js')
metaconfig.addConfig(require('admin-metadata-configs/src/default/index.js'))
metaconfig.addConfig(require('./meta/index.js'))

module.exports = {
    metaconfig: metaconfig
}