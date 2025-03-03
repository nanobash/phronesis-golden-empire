// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage21 from './pages/DebriefPage21.vue';
import DebriefPage22 from './pages/DebriefPage22.vue';
import DebriefPage23 from './pages/DebriefPage23.vue';
import DebriefPage24 from './pages/DebriefPage24.vue';
import DebriefPage25 from './pages/DebriefPage25.vue';
import DebriefPage26 from "./pages/DebriefPage26.vue";
import DebriefPage27 from "./pages/DebriefPage27.vue";
import DebriefPage28 from "./pages/DebriefPage28.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-21', component: DebriefPage21, name: 'Debrief 21' },
    { path: '/debrief-22', component: DebriefPage22, name: 'Debrief 22' },
    { path: '/debrief-23', component: DebriefPage23, name: 'Debrief 23' },
    { path: '/debrief-24', component: DebriefPage24, name: 'Debrief 24' },
    { path: '/debrief-25', component: DebriefPage25, name: 'Debrief 25' },
    { path: '/debrief-26', component: DebriefPage26, name: 'Debrief 26' },
    { path: '/debrief-27', component: DebriefPage27, name: 'Debrief 27' },
    { path: '/debrief-28', component: DebriefPage28, name: 'Debrief 28' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
