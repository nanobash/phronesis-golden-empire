// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
// import Cashier from './pages/Cashier.vue';
import CashierNew from './pages/Cashier-new.vue';
import DebriefPage59 from "./pages/DebriefPage59.vue";
import DebriefPage60 from "./pages/DebriefPage60.vue";
import DebriefPage61 from "./pages/DebriefPage61.vue";
import DebriefPage62 from "./pages/DebriefPage62.vue";
import DebriefPage63 from "./pages/DebriefPage63.vue";
import DebriefPage64 from "./pages/DebriefPage64.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/cashier-new', component: CashierNew, name: 'CashierNew' },
    { path: '/debrief-59', component: DebriefPage59, name: 'Debrief 59' },
    { path: '/debrief-60', component: DebriefPage60, name: 'Debrief 60' },
    { path: '/debrief-61', component: DebriefPage61, name: 'Debrief 61' },
    { path: '/debrief-62', component: DebriefPage62, name: 'Debrief 62' },
    { path: '/debrief-63', component: DebriefPage63, name: 'Debrief 63' },
    { path: '/debrief-64', component: DebriefPage64, name: 'Debrief 64' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
