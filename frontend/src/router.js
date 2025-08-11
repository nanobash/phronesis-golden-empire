// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage45 from "./pages/DebriefPage45.vue";
import DebriefPage46 from "./pages/DebriefPage46.vue";
import DebriefPage47 from "./pages/DebriefPage47.vue";
import DebriefPage48 from "./pages/DebriefPage48.vue";
import DebriefPage49 from "./pages/DebriefPage49.vue";
import DebriefPage50 from "./pages/DebriefPage50.vue";
import DebriefPage51 from "./pages/DebriefPage51.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-45', component: DebriefPage45, name: 'Debrief 45' },
    { path: '/debrief-46', component: DebriefPage46, name: 'Debrief 46' },
    { path: '/debrief-47', component: DebriefPage47, name: 'Debrief 47' },
    { path: '/debrief-48', component: DebriefPage48, name: 'Debrief 48' },
    { path: '/debrief-49', component: DebriefPage49, name: 'Debrief 49' },
    { path: '/debrief-50', component: DebriefPage50, name: 'Debrief 50' },
    { path: '/debrief-51', component: DebriefPage51, name: 'Debrief 51' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
