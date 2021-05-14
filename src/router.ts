import { createRouter, createWebHashHistory } from 'vue-router';

const routerHash = createWebHashHistory();

const router = createRouter({
    history: routerHash,  // history
    routes:[
        {
            path: "/",
            name: "home",
            component: () => import('./views/home.vue')
        },{
            path: "/contacts",
            name: "contacts",
            component: () => import('./views/contacts.vue')
        },{
            path: "/inquire",
            name: "inquire",
            component: () => import('./views/inquire.vue')
        },
    ]
});

export default router