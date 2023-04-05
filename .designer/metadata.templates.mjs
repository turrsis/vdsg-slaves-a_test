export default [{
    key: 'vuetify-2',
    children: [{
        key: 'buttons',
        children: [{
            key: 'v-btn-icon-3',
            label: 'btn three icon circle',
            src: { template: {
                tag: { name: 'v-btn' },
                props: { icon:'' },
                children: [{
                    tag: { name: 'v-icon' },
                    props: { icon: 'mdi-numeric-3-circle-outline' },
                }]
            } }
        }]
    }, {
        key: 'grids',
        children: [{
            key: 'columns',
            children: [{
                key: 'v-col-custom-1',
                label: 'v-col custom',
                src: { template: {
                    tag: { name: 'v-col' },
                    props: { cols: '12' },
                    children: ['col xxx']
                } }
            }]
        }]
    }]
}]