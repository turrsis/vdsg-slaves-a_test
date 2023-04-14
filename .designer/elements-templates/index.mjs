export default [{
    key: 'buttons',
    children: [{
        key: 'v-btn-icon-3',
        label: 'with (3) icon',
        thumb: () => import('./thumbnails/v-btn-circle-icon-03.png'),
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
            thumb: () => import('./thumbnails/v-col.png'),
            src: { template: {
                tag: { name: 'v-col' },
                props: { cols: '12' },
                children: ['col xxx']
            } }
        }]
    }]
}]