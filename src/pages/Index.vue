<template>
    <div class="index-page contents">
        <div class="row is-block">
            <div class="column by1-3">
                <p class="tag-wrp"><span class="is-tag">Blog</span></p>
                <div class="row is-block">
                    <article-item v-for="({title, date, link, subcontent, isSorotan}, index) in articles"
                                  :key="index+'-article'"
                                  :title="title" :date="date" :link="link" :subcontent="subcontent"
                                  :isSorotan="isSorotan" class="by2 column"/>
                </div>
                <portofolio-slider/>
            </div>
            <div class="column by3">
                <about-me ref="aboutMe"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        metaInfo: {
            title: 'Cahyo Wibowo - Daily blog about everything',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`,
                    'content': 'Cahyo Wibowo - Daily blog about everything',
                    'vmid': 'og:title'
                },
                {
                    'property': 'description',
                    'template': chunk => `${chunk}`,
                    'content': 'Daily blog about everything'
                },
                {
                    'property': 'og:image',
                    'template': chunk => `${chunk}`,
                    'content': 'https://cahyowhy.github.io/static/images/me.jpg'
                }
            ]
        },
        data() {
            return {
                articles: [
                    {
                        title: 'Memulai Javascript Part 1',
                        subcontent: `Sebelum memulai untuk belajar
                            framework javascript (misal React, Angular, Ember, Vue dll), Ada baiknya
                            untuk mengenal dasar javascript terlebih dahulu.`,
                        link: '/memulai-js-1', date: '20 November 2017',
                        isSorotan: false
                    },
                    {
                        title: 'Meminimalisasi Perubahan Variabel Pada Javascript', date: '20 November 2017',
                        subcontent: `Javascript merupakan bahasa yang riskan. Berbeda dengan bahasa compiler yang
                        mengcompile seluruh programnya sebelum dijalankan.`, link: '/meminimalisasi-perubahan-var-js',
                        isSorotan: false
                    },
                    {
                        title: 'Macam Macam method Array pada javascript', date: '20 November 2017',
                        subcontent: `Pada Javascript, memanipulasi Array sebenarnya tidaklah terlalu sulit jika
                        kita tahu cara efektifnya. Pada post kali ini saya akan membuat contoh beberapa kasus yang
                        dapat kita gunakan untuk mengaplikasikan beberapa method array pada javasript.`,
                        link: '/macam-method-array-js',
                        isSorotan: false
                    },
                    {
                        title: 'Compile file c# dengan cmd di windows', date: '20 November 2015',
                        subcontent: `C# adalah bahasa program yang diciptakan oleh microsoft yang merupakan sebuah
                        versi canggih dari c++. Umumnya bahasa c# lebih unggul dalam bidang OOP (oriented object
                        programming) dari pada versi pendahulunya yaitu`, link: '/compile-file-csharp-cmd',
                        isSorotan: false
                    }
                ]
            }
        },
        mounted() {
            if (window.$(window).width() > 640) {
                const element = this.$refs.aboutMe.$el;
                const context = this;

                new window.Waypoint.Sticky({
                    element,
                    handler: function (direction) {
                        const hasStuck = this.$element.hasClass('stuck');
                        context.isSidebarFixed = hasStuck;

                        if (hasStuck) {
                            this.$element.css("width", `${this.$wrapper.width()}px`);
                        } else {
                            this.$element.removeAttr('style');
                        }
                    },
                    offset: 60
                });
            }
        }
    }
</script>