import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';
import Hearthstone from './pages/Hearthstone/Index.vue';
import MyCollection from './pages/MyCollection/Index.vue';
import NotFinish from './pages/NotFinish.vue';
import NotFound from './pages/404.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/hearthstone',
        name: 'hearthstone',
        component: Hearthstone,
    },
    {
        path: '/battlegrounds',
        name: 'battlegrounds',
        component: NotFinish,
    },
    {
        path: '/mercenaries',
        name: 'mercenaries',
        component: NotFinish,
    },
    {
        path: '/modes',
        name: 'modes',
        component: NotFinish,
    },
    {
        path: '/myCollection',
        name: 'myCollection',
        component: MyCollection,
    },
    {
        path: '/openPacks',
        name: 'openPacks',
        component: NotFinish,
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
