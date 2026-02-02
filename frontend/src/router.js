// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
// import Cashier from './pages/Cashier.vue';
import CashierNew from "./pages/Cashier-new.vue";
import DebriefPage63 from "./pages/DebriefPage63.vue";
import DebriefPage64 from "./pages/DebriefPage64.vue";
import DebriefPage65 from "./pages/DebriefPage65.vue";
import DebriefPage66 from "./pages/DebriefPage66.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    // { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: "/cashier-new", component: CashierNew, name: "CashierNew" },
    { path: "/debrief-63", component: DebriefPage63, name: "Debrief 63" },
    { path: "/debrief-64", component: DebriefPage64, name: "Debrief 64" },
    { path: "/debrief-65", component: DebriefPage65, name: "Debrief 65" },
    { path: "/debrief-66", component: DebriefPage66, name: "Debrief 66" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
