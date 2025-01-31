// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage21 from './pages/DebriefPage21.vue';
import DebriefPage22 from './pages/DebriefPage22.vue';
import DebriefPage23 from './pages/DebriefPage23.vue';

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-21', component: DebriefPage21, name: 'Debrief 21' },
    { path: '/debrief-22', component: DebriefPage22, name: 'Debrief 22' },
    { path: '/debrief-23', component: DebriefPage23, name: 'Debrief 23' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
