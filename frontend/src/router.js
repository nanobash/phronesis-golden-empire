// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
// import Cashier from './pages/Cashier.vue';
import CashierNew from "./pages/Cashier-new.vue";
import DebriefPage68 from "./pages/DebriefPage68.vue";
import DebriefPage69 from "./pages/DebriefPage69.vue";
import DebriefPage70 from "./pages/DebriefPage70.vue";
import DebriefPage71 from "./pages/DebriefPage71.vue";
import DebriefPage72 from "./pages/DebriefPage72.vue";
import DebriefPage73 from "./pages/DebriefPage73.vue";
import DebriefPage74 from "./pages/DebriefPage74.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: "/cashier-new", component: CashierNew, name: "CashierNew" },
    { path: "/debrief-68", component: DebriefPage68, name: "Debrief 68" },
    { path: "/debrief-69", component: DebriefPage69, name: "Debrief 69" },
    { path: "/debrief-70", component: DebriefPage70, name: "Debrief 70" },
    { path: "/debrief-71", component: DebriefPage71, name: "Debrief 71" },
    { path: "/debrief-72", component: DebriefPage72, name: "Debrief 72" },
    { path: "/debrief-73", component: DebriefPage73, name: "Debrief 73" },
    { path: "/debrief-74", component: DebriefPage74, name: "Debrief 74" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
