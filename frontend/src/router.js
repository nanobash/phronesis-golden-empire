// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage32 from "./pages/DebriefPage32.vue";
import DebriefPage33 from "./pages/DebriefPage33.vue";
import DebriefPage34 from "./pages/DebriefPage34.vue";
import DebriefPage35 from "./pages/DebriefPage35.vue";
import DebriefPage36 from "./pages/DebriefPage36.vue";
import DebriefPage37 from "./pages/DebriefPage37.vue";
import DebriefPage38 from "./pages/DebriefPage38.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-32', component: DebriefPage32, name: 'Debrief 32' },
    { path: '/debrief-33', component: DebriefPage33, name: 'Debrief 33' },
    { path: '/debrief-34', component: DebriefPage34, name: 'Debrief 34' },
    { path: '/debrief-35', component: DebriefPage35, name: 'Debrief 35' },
    { path: '/debrief-36', component: DebriefPage36, name: 'Debrief 36' },
    { path: '/debrief-37', component: DebriefPage37, name: 'Debrief 37' },
    { path: '/debrief-38', component: DebriefPage38, name: 'Debrief 38' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
