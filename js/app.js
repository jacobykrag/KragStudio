import Home from './websites/Home.js';
import NotFound from './websites/NotFound.js';

const routes = [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            
            return savedPosition;
        } else {
            
            return { top: 0, left: 0 };
        }
    },
});

const app = Vue.createApp({});

app.use(router);

app.mount('#app');
