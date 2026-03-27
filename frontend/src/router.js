// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
// import Cashier from './pages/Cashier.vue';
import CashierNew from "./pages/Cashier-new.vue";
import DebriefPage68 from "./pages/DebriefPage68.vue";
import DebriefPage69 from "./pages/DebriefPage69.vue";
import DebriefPage70 from "./pages/DebriefPage70.vue";
import DebriefPage71 from "./pages/DebriefPage71.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: "/cashier-new", component: CashierNew, name: "CashierNew" },
    { path: "/debrief-68", component: DebriefPage68, name: "Debrief 68" },
    { path: "/debrief-69", component: DebriefPage69, name: "Debrief 69" },
    { path: "/debrief-70", component: DebriefPage70, name: "Debrief 70" },
    { path: "/debrief-71", component: DebriefPage71, name: "Debrief 71" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
