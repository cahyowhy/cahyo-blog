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
import PortofolioSlider from './components/PortofolioSlider.vue';
import BaseArticle from './components/BaseArticle.vue';
import ArticleItem from './components/ArticleItem.vue';
import AboutMe from './components/AboutMe.vue';
import VueEmbedGist from 'vue-embed-gist';

Vue.use(VueRouter);
Vue.use(Meta);

Vue.component('common-image', CommonImage);
Vue.component('portofolio-slider', PortofolioSlider);
Vue.component('base-article', BaseArticle);
Vue.component('article-item', ArticleItem);
Vue.component('vue-embed-gist', VueEmbedGist);
Vue.component('about-me', AboutMe);

// page-component
Vue.component('memulai-js-1', ArticleMemulaiJS1);
Vue.component('index-page', IndexPage);
Vue.component('macam-method-array-js', ArticleCompileFileCSHARPDenganCMD);
Vue.component('compile-file-csharp-cmd', ArticleMacamMethodArrayJS);
Vue.component('meminimalisasi-perubahan-var-js', ArticleMeminimalisasiPerubahanVarJS);

const MemulaiJS1 = {
    template: '<div><memulai-js-1/></div>'
};

const MeminimalisasiPerubahanVarJS = {
    template: '<div><meminimalisasi-perubahan-var-js/></div>'
};

const MacamMethodArrayJS = {
    template: '<div><macam-method-array-js/></div>'
};

const CompileFileCSHARPDenganCMD = {
    template: '<div><compile-file-csharp-cmd/></div>'
};

const BaseIndex = {
    template: '<div><index-page/></div>'
};

const routes = [
    {path: '/', component: BaseIndex},
    {path: '/memulai-js-1', component: MemulaiJS1},
    {path: '/meminimalisasi-perubahan-var-js', component: MeminimalisasiPerubahanVarJS},
    {path: '/macam-method-array-js', component: MacamMethodArrayJS},
    {path: '/compile-file-csharp-cmd', component: CompileFileCSHARPDenganCMD},
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
        window.$(document).on('ready', function () {
            window.renderEvent = new Event('render-event', {bubbles: true});

            document.dispatchEvent(window.renderEvent);
        });
    }
});
