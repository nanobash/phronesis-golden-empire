// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage21 from './pages/DebriefPage21.vue';

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-21', component: DebriefPage21, name: 'Debrief 21'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
