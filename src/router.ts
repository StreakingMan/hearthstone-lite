import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';
import NotFound from './pages/404.vue';
import { toKebabCase } from './utils/string';

const routes: RouteRecordRaw[] = [];

// 批量引入路由
interface PageSFCFiles {
    [path: string]: RouteRecordRaw['component'];
}
const pages: PageSFCFiles = import.meta.glob('./pages/**/*.vue');
const exclude = ['404', 'home', 'not-finish'];
for (const path in pages) {
    const pathSplit = path.split('/').map((item) => toKebabCase(item));
    let name = pathSplit.slice(-1)[0].replace('.vue', '');
    if (name === 'index') {
        name = pathSplit.slice(-2)[0];
    }
    if (exclude.includes(name)) {
        continue;
    }
    routes.push({
        path: `/${name}`,
        name,
        component: pages[path],
        children: [],
    });
}

routes.push(
    ...[
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
);

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
