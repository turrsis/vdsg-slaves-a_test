import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HomeWrap from '../views/HomeWrap.vue';
import testsRoutes from '../../.designer-tests/routes.js';
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/HomeWrap',
    name: 'HomeWrap',
    component: HomeWrap
}, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
    /* webpackChunkName: "about" */
    '../views/About.vue')
}].concat(testsRoutes);
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;