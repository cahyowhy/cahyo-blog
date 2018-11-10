import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Meta from 'vue-meta';

import AboutPage from './pages/About.vue';
import IndexPage from './pages/Index.vue';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
    {path: '/', component: IndexPage},
    {path: '/about', component: AboutPage}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    mounted() {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
});
