// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage36 from "./pages/DebriefPage36.vue";
import DebriefPage37 from "./pages/DebriefPage37.vue";
import DebriefPage38 from "./pages/DebriefPage38.vue";
import DebriefPage39 from "./pages/DebriefPage39.vue";
import DebriefPage40 from "./pages/DebriefPage40.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-36', component: DebriefPage36, name: 'Debrief 36' },
    { path: '/debrief-37', component: DebriefPage37, name: 'Debrief 37' },
    { path: '/debrief-38', component: DebriefPage38, name: 'Debrief 38' },
    { path: '/debrief-39', component: DebriefPage39, name: 'Debrief 39' },
    { path: '/debrief-40', component: DebriefPage40, name: 'Debrief 40' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
