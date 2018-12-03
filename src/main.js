import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Meta from 'vue-meta';

import IndexPage from './pages/Index.vue';
import CommonImage from './components/CommonImage.vue';
import VueGist from './components/VueGist.vue';
import PortofolioSlider from './components/PortofolioSlider.vue';
import BaseArticle from './components/BaseArticle.vue';
import ArticleItem from './components/ArticleItem.vue';
import AboutMe from './components/AboutMe.vue';

Vue.use(VueRouter);
Vue.use(Meta);

Vue.component('common-image', CommonImage);
Vue.component('portofolio-slider', PortofolioSlider);
Vue.component('base-article', BaseArticle);
Vue.component('article-item', ArticleItem);
Vue.component('vue-embed-gist', VueGist);
Vue.component('about-me', AboutMe);

const loadPage = (file, isArticle = true) => () => import((isArticle ? './pages/articles/' : './components/') + file + '.vue')
    .catch(console.log);

// page-component
Vue.component('memulai-js-1', loadPage('ArticleMemulaiJS1'));
Vue.component('meminimalisasi-perubahan-var-js', loadPage('ArticleMeminimalisasiPerubahanVarJS'));
Vue.component('compile-file-csharp-cmd', loadPage('ArticleCompileFileCSHARPDenganCMD'));
Vue.component('macam-method-array-js', loadPage('ArticleMacamMethodArrayJS'));
Vue.component('reduce-js-file-size-webpack-context-replacement-plugin', loadPage('ArticleMereduksiUkFileJsDenganContextReplacement'));

Vue.component('index-page', IndexPage);

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

const ReduceJSFileIgnorePlugin = {
    template: '<div><reduce-js-file-size-webpack-context-replacement-plugin/></div>'
};

const routes = [
    {path: '/', component: BaseIndex},
    {path: '/memulai-js-1', component: MemulaiJS1},
    {path: '/meminimalisasi-perubahan-var-js', component: MeminimalisasiPerubahanVarJS},
    {path: '/macam-method-array-js', component: MacamMethodArrayJS},
    {path: '/compile-file-csharp-cmd', component: CompileFileCSHARPDenganCMD},
    {path: '/reduce-js-file-size-webpack-context-replacement-plugin', component: ReduceJSFileIgnorePlugin},
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
