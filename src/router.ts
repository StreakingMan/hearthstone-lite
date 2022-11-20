import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/hearthstone',
        name: 'hearthstone',
        component: () => import('./pages/Hearthstone/Index.vue'),
    },
    {
        path: '/battlegrounds',
        name: 'battlegrounds',
        component: () => import('./pages/NotFinish.vue'),
    },
    {
        path: '/mercenaries',
        name: 'mercenaries',
        component: () => import('./pages/NotFinish.vue'),
    },
    {
        path: '/modes',
        name: 'modes',
        component: () => import('./pages/NotFinish.vue'),
    },
    {
        path: '/myCollection',
        name: 'myCollection',
        component: () => import('./pages/NotFinish.vue'),
    },
    {
        path: '/openPacks',
        name: 'openPacks',
        component: () => import('./pages/NotFinish.vue'),
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./pages/404.vue'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
