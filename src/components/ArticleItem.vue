<template>
    <div class="a-item">
        <div v-if="isSorotan" class="ribbon"></div>
        <div class="inner">
            <h2><router-link :to="link">{{title}}</router-link></h2>
            <span>{{date}}</span>
            <p>
                {{subcontent}}.......
                <router-link :to="link">Selengkapnya</router-link>
            </p>
        </div>
        <div class="ov-lg"></div>
    </div>
</template>

<script>
    export default {
        name: "article-item",
        props: {
            title: {
                required: true,
                default: '',
                type: String
            },
            date: {
                required: true,
                default: new Date().toDateString(),
                type: String
            },
            subcontent: {
                required: true,
                default: '',
                type: String
            },
            link: {
                required: true,
                default: '/',
                type: String
            },
            isSorotan: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if (this.isSorotan) {
                window.$(this.$el).addClass('is-sorotan');
            }
        }
    }
</script>