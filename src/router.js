// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Project21 from './pages/Project21.vue';
import DebriefPage from './pages/DebriefPage.vue';

const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/project21', component: Project21, name: 'Project 21' },
    { path: '/debrief', component: DebriefPage, name: 'Debrief'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
