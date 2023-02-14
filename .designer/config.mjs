export default {
    key: 'vdsg-tests-vuetify',
    label: 'vuetify tests',
    app: {
        tests: {
            uiSpecsPath: '.designer-tests/.spec',
        },
        router: {
            entryPoint: 'src/main.js',
        },
    },
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8086,
    }
}