export default {
    key: 'vdsg-tests-vuetify',
    label: 'vuetify tests',
    app: {
        tests: {
            uiSpecsPath: '.designer-tests/.spec',
        },
        pages: {
            pathPrefix: 'src/views/',
        },
        router: {
            entryPoint: 'src/router/index.js',
        },
    },
    originhost: 'http://localhost:8080',
    server: {
        protocol: 'http:',
        host: 'localhost',
        port: 8086,
    }
}