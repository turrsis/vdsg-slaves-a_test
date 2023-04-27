import metadataTests from 'vdsg-metadata-tests'
import metadataConfigs from 'vdsg-metadata-configs'
import metadataVuetify from 'vdsg-metadata-vuetify'
import metadataVuetifyUser from 'vdsg-metadata-vuetify-user'

import templates from './elements-templates/index.mjs'

export default [
    metadataTests,
    metadataConfigs,
    metadataVuetify,
    metadataVuetifyUser,
    {
        templates: templates,
        elements: {
        },
        common: {
            props: {}
        }
    }
]