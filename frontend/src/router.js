// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
// import Cashier from './pages/Cashier.vue';
import CashierNew from "./pages/Cashier-new.vue";
import DebriefPage70 from "./pages/DebriefPage70.vue";
import DebriefPage71 from "./pages/DebriefPage71.vue";
import DebriefPage72 from "./pages/DebriefPage72.vue";
import DebriefPage73 from "./pages/DebriefPage73.vue";
import DebriefPage74 from "./pages/DebriefPage74.vue";
import DebriefPage75 from "./pages/DebriefPage75.vue";
import DebriefPage76 from "./pages/DebriefPage76.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: "/cashier-new", component: CashierNew, name: "CashierNew" },
    { path: "/debrief-70", component: DebriefPage70, name: "Debrief 70" },
    { path: "/debrief-71", component: DebriefPage71, name: "Debrief 71" },
    { path: "/debrief-72", component: DebriefPage72, name: "Debrief 72" },
    { path: "/debrief-73", component: DebriefPage73, name: "Debrief 73" },
    { path: "/debrief-74", component: DebriefPage74, name: "Debrief 74" },
    { path: "/debrief-75", component: DebriefPage75, name: "Debrief 75" },
    { path: "/debrief-76", component: DebriefPage76, name: "Debrief 76" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
