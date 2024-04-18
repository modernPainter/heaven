import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { keepAlive: true, },
        children: [],
        props: ({ query }) => query,
        // redirect: () => {
        //     return '/login';
        // },
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/index.vue'),
        meta: {
            keepAlive: false,
        },
        children: [],
        props: ({ query }) => query,
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/test2/index.vue'),
        meta: {
            keepAlive: true,
        },
        children: [],
        props: ({ query }) => query,
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'error',
    //     redirect: '/alarm',
    //     meta: { hidden: true },
    // },
];

export const $router = createRouter({
    history: createWebHistory(),// createWebHistory(import.meta.env.BASE_URL)
    routes,
    parseQuery: search => Object.fromEntries(new URLSearchParams(search)),
    stringifyQuery: query => new URLSearchParams(query as Record<string, any>) + '',
});

export let $from: RouteLocationNormalized;
$router.beforeEach((to, from, next) => {
    $from = from;
    next();
});
