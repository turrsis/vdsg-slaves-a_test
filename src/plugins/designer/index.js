import designer from 'admin-slave'
import config from './config.js'

export default (app) => {
    designer.install(app, config)
}