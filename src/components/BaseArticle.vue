<template>
    <div class="base-article">
        <div class="article-page">
            <div class="row is-block">
                <div class="column by1-3">
                    <div class="content">
                        <slot></slot>
                    </div>
                    <div id="comment-section" class="comment-section">
                        <div class="share-wrapper">
                            <p>Bagikan</p>
                            <div id="share"></div>
                        </div>
                        <div v-if="fbPlaceholder" class="ce-placeholder"></div>
                        <div class="fb-comments" :data-href="location" data-width="100%" data-numposts="5"></div>
                    </div>
                </div>
                <div class="column by3">
                    <about-me ref="aboutMe"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-article",
        data() {
            return {
                location: '',
                locationUriComponent: '',
                fbPlaceholder: true
            }
        },
        created() {
            this.location = window.location.href;
            this.locationUriComponent = window.encodeURIComponent(window.location.href);
        },
        mounted() {
            if (window.$(window).width() > 640 && this.$refs.aboutMe) {
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

            window.$("#share").jsSocials({
                showCount: true,
                showLabel: false,
                url: window.location.href,
                shares: [
                    {share: "twitter", logo: "fab fa-twitter"},
                    {share: "facebook", logo: "fab fa-facebook"},
                    {share: "googleplus", logo: "fab fa-google-plus-g"},
                    {share: "linkedin", logo: "fab fa-linkedin"},
                    {share: "whatsapp", logo: "fab fa-whatsapp"}
                ]
            });

            window.onscroll = () => {
                const rect = document.getElementById('comment-section').getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    this.loadFacebookAPI();
                    window.onscroll = null;
                }
            }
        },
        methods: {
            loadFacebookAPI() {
                if (window.FB) {
                    window.FB.init({
                        appId: '261021078105559',
                        status: true,
                        xfbml: true,
                        version: 'v3.2'
                    });

                    window.FB.Event.subscribe("xfbml.render", () => {
                        this.fbPlaceholder = false;
                    });
                }

                let js, fjs = document.getElementsByTagName("script")[0];
                if (document.getElementById('facebook-jssdk')) return;

                js = document.createElement("script");
                js.id = 'facebook-jssdk';
                js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=261021078105559&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
    }
</script>

<style lang="scss">
    $color_near_bg_darken: #dbdbdb;
    $color_near_bg: #f4f4f4;

    @keyframes loading {
        0% {
            background: linear-gradient(90deg, $color_near_bg_darken, $color_near_bg 0%);
        }
        20% {
            background: linear-gradient(90deg, $color_near_bg_darken, $color_near_bg 10%);
        }
        30% {
            background: linear-gradient(90deg, $color_near_bg_darken, $color_near_bg 20%);
        }
        40% {
            background: linear-gradient(90deg, $color_near_bg_darken, $color_near_bg 30%);
        }
        50% {
            background: linear-gradient(90deg, $color_near_bg_darken, $color_near_bg);
        }
        60% {
            background: linear-gradient(90deg, $color_near_bg_darken 60%, $color_near_bg);
        }
        70% {
            background: linear-gradient(90deg, $color_near_bg_darken 70%, $color_near_bg);
        }
        80% {
            background: linear-gradient(90deg, $color_near_bg_darken 80%, $color_near_bg);
        }
        90% {
            background: linear-gradient(90deg, $color_near_bg_darken 90%, $color_near_bg);
        }
        100% {
            background: linear-gradient(90deg, $color_near_bg_darken 30% 100%, $color_near_bg);
        }
    }

    .ce-placeholder {
        width: 100%;
        position: relative;
        &::after, &::before {
            animation: loading 1s linear infinite;
            content: '';
            display: block;
        }
        &::before {
            margin-bottom: 1rem;
            height: 40px;
        }
        &::after {
            height: 200px;
        }
    }
</style>