// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage29 from "./pages/DebriefPage29.vue";
import DebriefPage30 from "./pages/DebriefPage30.vue";
import DebriefPage31 from "./pages/DebriefPage31.vue";
import DebriefPage32 from "./pages/DebriefPage32.vue";
import DebriefPage33 from "./pages/DebriefPage33.vue";
import DebriefPage34 from "./pages/DebriefPage34.vue";
import DebriefPage35 from "./pages/DebriefPage35.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-29', component: DebriefPage29, name: 'Debrief 29' },
    { path: '/debrief-30', component: DebriefPage30, name: 'Debrief 30' },
    { path: '/debrief-31', component: DebriefPage31, name: 'Debrief 31' },
    { path: '/debrief-32', component: DebriefPage32, name: 'Debrief 32' },
    { path: '/debrief-33', component: DebriefPage33, name: 'Debrief 33' },
    { path: '/debrief-34', component: DebriefPage34, name: 'Debrief 34' },
    { path: '/debrief-35', component: DebriefPage35, name: 'Debrief 35' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
