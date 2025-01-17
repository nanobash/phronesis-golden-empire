// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage from './pages/DebriefPage.vue';

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief', component: DebriefPage, name: 'Debrief'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
