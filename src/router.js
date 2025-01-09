// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'Home' },
  { path: '/about', component: AboutPage, name: 'About' },
  { path: '/contact', component: ContactPage, name: 'Contact' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
