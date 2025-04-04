// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage25 from './pages/DebriefPage25.vue';
import DebriefPage26 from "./pages/DebriefPage26.vue";
import DebriefPage27 from "./pages/DebriefPage27.vue";
import DebriefPage28 from "./pages/DebriefPage28.vue";
import DebriefPage29 from "./pages/DebriefPage29.vue";
import DebriefPage30 from "./pages/DebriefPage30.vue";
import DebriefPage31 from "./pages/DebriefPage31.vue";
import DebriefPage32 from "./pages/DebriefPage32.vue";
import DebriefPage33 from "./pages/DebriefPage33.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-25', component: DebriefPage25, name: 'Debrief 25' },
    { path: '/debrief-26', component: DebriefPage26, name: 'Debrief 26' },
    { path: '/debrief-27', component: DebriefPage27, name: 'Debrief 27' },
    { path: '/debrief-28', component: DebriefPage28, name: 'Debrief 28' },
    { path: '/debrief-29', component: DebriefPage29, name: 'Debrief 29' },
    { path: '/debrief-30', component: DebriefPage30, name: 'Debrief 30' },
    { path: '/debrief-31', component: DebriefPage31, name: 'Debrief 31' },
    { path: '/debrief-32', component: DebriefPage32, name: 'Debrief 32' },
    { path: '/debrief-33', component: DebriefPage33, name: 'Debrief 33' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
