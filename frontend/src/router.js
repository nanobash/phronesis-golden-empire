// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Cashier from './pages/Cashier.vue';
import DebriefPage40 from "./pages/DebriefPage40.vue";
import DebriefPage41 from "./pages/DebriefPage41.vue";
import DebriefPage42 from "./pages/DebriefPage42.vue";
import DebriefPage43 from "./pages/DebriefPage43.vue";
import DebriefPage44 from "./pages/DebriefPage44.vue";
import DebriefPage45 from "./pages/DebriefPage45.vue";
import DebriefPage46 from "./pages/DebriefPage46.vue";
import DebriefPage47 from "./pages/DebriefPage47.vue";
import DebriefPage48 from "./pages/DebriefPage48.vue";
import DebriefPage49 from "./pages/DebriefPage49.vue";

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/cashier', component: Cashier, name: 'Cashier' },
    { path: '/debrief-40', component: DebriefPage40, name: 'Debrief 40' },
    { path: '/debrief-41', component: DebriefPage41, name: 'Debrief 41' },
    { path: '/debrief-42', component: DebriefPage42, name: 'Debrief 42' },
    { path: '/debrief-43', component: DebriefPage43, name: 'Debrief 43' },
    { path: '/debrief-44', component: DebriefPage44, name: 'Debrief 44' },
    { path: '/debrief-45', component: DebriefPage45, name: 'Debrief 45' },
    { path: '/debrief-46', component: DebriefPage46, name: 'Debrief 46' },
    { path: '/debrief-47', component: DebriefPage47, name: 'Debrief 47' },
    { path: '/debrief-48', component: DebriefPage48, name: 'Debrief 48' },
    { path: '/debrief-49', component: DebriefPage49, name: 'Debrief 49' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
