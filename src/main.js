import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Meta from 'vue-meta';

import ArticleMemulaiJS1 from './pages/articles/ArticleMemulaiJS1.vue';
import ArticleMeminimalisasiPerubahanVarJS from './pages/articles/ArticleMeminimalisasiPerubahanVarJS.vue';
import ArticleCompileFileCSHARPDenganCMD from './pages/articles/ArticleCompileFileCSHARPDenganCMD.vue';
import ArticleMacamMethodArrayJS from './pages/articles/ArticleMacamMethodArrayJS.vue';
import IndexPage from './pages/Index.vue';

import CommonImage from './components/CommonImage.vue';
import BaseArticle from './components/BaseArticle.vue';
import ArticleItem from './components/ArticleItem.vue';
import AboutMe from './components/AboutMe.vue';
import VueEmbedGist from 'vue-embed-gist';

Vue.use(VueRouter);
Vue.use(Meta);

Vue.component('common-image', CommonImage);
Vue.component('base-article', BaseArticle);
Vue.component('article-item', ArticleItem);
Vue.component('vue-embed-gist', VueEmbedGist);
Vue.component('about-me', AboutMe);

const routes = [
    {path: '/', component: IndexPage},
    {path: '/memulai-js-1', component: ArticleMemulaiJS1},
    {path: '/meminimalisasi-perubahan-var-js', component: ArticleMeminimalisasiPerubahanVarJS},
    {path: '/macam-method-array-js', component: ArticleMacamMethodArrayJS},
    {path: '/compile-file-csharp-cmd', component: ArticleCompileFileCSHARPDenganCMD},
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
        window.renderEvent = new Event('render-event', {bubbles: true});
        document.dispatchEvent(window.renderEvent);
    }
});
