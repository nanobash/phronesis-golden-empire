// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
// import Cashier from './pages/Cashier.vue';
import CashierNew from './pages/Cashier-new.vue';
import DebriefPage50 from "./pages/DebriefPage50.vue";
import DebriefPage51 from "./pages/DebriefPage51.vue";
import DebriefPage52 from "./pages/DebriefPage52.vue";
import DebriefPage53 from "./pages/DebriefPage53.vue";
import DebriefPage54 from "./pages/DebriefPage54.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/cashier-new', component: CashierNew, name: 'CashierNew' },
    { path: '/debrief-50', component: DebriefPage50, name: 'Debrief 50' },
    { path: '/debrief-51', component: DebriefPage51, name: 'Debrief 51' },
    { path: '/debrief-52', component: DebriefPage52, name: 'Debrief 52' },
    { path: '/debrief-53', component: DebriefPage53, name: 'Debrief 53' },
    { path: '/debrief-54', component: DebriefPage54, name: 'Debrief 54' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
