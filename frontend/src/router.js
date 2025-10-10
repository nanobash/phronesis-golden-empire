// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
// import Cashier from './pages/Cashier.vue';
import CashierNew from './pages/Cashier-new.vue';
import DebriefPage54 from "./pages/DebriefPage54.vue";
import DebriefPage56 from "./pages/DebriefPage56.vue";
import DebriefPage57 from "./pages/DebriefPage57.vue";
import DebriefPage58 from "./pages/DebriefPage58.vue";
import DebriefPage59 from "./pages/DebriefPage59.vue";
import DebriefPage60 from "./pages/DebriefPage60.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/cashier-new', component: CashierNew, name: 'CashierNew' },
    { path: '/debrief-54', component: DebriefPage54, name: 'Debrief 54' },
    { path: '/debrief-56', component: DebriefPage56, name: 'Debrief 56' },
    { path: '/debrief-57', component: DebriefPage57, name: 'Debrief 57' },
    { path: '/debrief-58', component: DebriefPage58, name: 'Debrief 58' },
    { path: '/debrief-59', component: DebriefPage59, name: 'Debrief 59' },
    { path: '/debrief-60', component: DebriefPage60, name: 'Debrief 60' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
