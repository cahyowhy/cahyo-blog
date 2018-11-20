<template>
    <div class="portofolio-wrp">
        <h3>Portofolio</h3>
        <p class="text-mute">Beberapa website yang saya bangun</p>
        <div class="ps-wrp">
            <a @click.prevent="prev" :class="active > 1 ? 'sl-active' : ''"><i class="fas fa-chevron-left"></i></a>
            <ul>
                <li v-for="({img, name, tech, description, link}, index) in portofolios"
                    :key="'li-'+index" v-if="active === (index + 1)">
                    <img :src="img" :alt="name">
                    <div class="detail">
                        <h4>{{name}}</h4>
                        <p class="text-mute">{{tech}}</p>
                        <p>{{description}}</p>
                        <a :href="link" target="_blank" class="button">Kunjungi</a>
                    </div>
                </li>
            </ul>
            <a @click.prevent="next" :class="active < max ? 'sl-active' : ''"><i class="fas fa-chevron-right"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortofolioSlider",
        data() {
            return {
                max: 3,
                active: 1,
                portofolios: [
                    {
                        img: '/static/images/smartmockups_jophc7ko.jpg',
                        name: 'Combine.or.id', tech: 'Ember js, Ember fastboot, Bulma css',
                        description: 'CMS dengan menggunakan ember js. ' +
                            'Server side rendering dengan menggunakan Ember fastboot agar dapat SEO',
                        link: 'https://combine.or.id/'
                    },
                    {
                        img: '/static/images/smartmockups_jophidxx.jpg',
                        name: 'Plunq.id', tech: 'jquery, bootstrap, html, css',
                        description: 'Aplikasi yang membantu menemukan tempat-tempat baru dan menarik',
                        link: 'http://plunq.id/'
                    },
                    {
                        img: '/static/images/smartmockups_jophm8st.jpg',
                        name: 'Portal SID Berdaya', tech: 'Ember js, jquery, bootstrap',
                        description: 'Layanan penggunaan dan pendampingan \n' +
                            'Sistem Informasi Desa (SID) Berdaya', link: 'https://sid.combine.or.id/'
                    }],
            }
        },
        methods: {
            prev() {
                if (this.active > 1) {
                    if (this.active === 1) return;
                    this.active--;
                }
            },
            next() {
                if (this.active < this.max) {
                    if (this.active === this.max) return;
                    this.active++;
                }
            },
        }
    }
</script>