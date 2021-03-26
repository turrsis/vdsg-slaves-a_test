import Vue from 'vue'
import Router from 'vue-router'

import utils from "admin-common/utils.cli.js" // TODO remove this
const navigation = utils.interopDefault(import('../Navigation.vue'
/* webpackChunkName: "components_navigation" */
))
const emptyRoute = utils.createEmptyRoute()

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        name: 'home',
        components: {
            left: emptyRoute,
            footer: emptyRoute,
            header: () => navigation,
            default: () => utils.interopDefault(import('../views/Home.vue'))
        }
    }, {
        path: '*',
        name: 'Error'
    }, {
        path: '/page1',
        name: 'page1',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../views/Page1.vue'))
        },
        meta: { layout: 'simpleOneView' }
    }, {
        path: '/cummulative',
        name: 'cummulative',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../views/Cummulative.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/Btn',
        name: 'components/Btn',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../components/Btn.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/Grid',
        name: 'components/Grid',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../components/Grid.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/Tabs',
        name: 'components/Tabs',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../components/Tabs.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/Carousel',
        name: 'components/Carousel',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../components/Carousel.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/AppBar',
        name: 'components/AppBar',
        components: {
            default: () => utils.interopDefault(import('../components/AppBar.vue'))
        },
        meta: { layout: 'simpleOneView' }
    }, {
        path: '/components/Card',
        name: 'components/Card',
        components: {
            header: () => navigation,
            default: () => utils.interopDefault(import('../components/Card.vue'))
        },
        meta: { layout: 'simple' }
    }, {
        path: '/components/SimpleTable',
        name: 'components/SimpleTable',
        components: {
            default: () => utils.interopDefault(import('../components/SimpleTable.vue'))
        },
        meta: { layout: 'simple' }
    }]
})