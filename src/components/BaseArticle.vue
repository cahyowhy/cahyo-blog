<template>
    <div class="base-article">
        <div class="article-page">
            <div class="row is-block">
                <div class="column by1-3">
                    <div class="content">
                        <slot></slot>
                    </div>
                    <div class="comment-section">
                        <div class="fb-share-button" :data-href="location" data-layout="button" data-size="small"
                             data-mobile-iframe="true">
                            <a target="_blank"
                               :href="`https://www.facebook.com/sharer/sharer.php?u=${locationUriComponent}%2F&amp;src=sdkpreparse`"
                               class="fb-xfbml-parse-ignore">Share</a>
                        </div>
                        <div class="fb-comments" :data-href="location" data-width="100%" data-numposts="5"></div>
                    </div>
                </div>
                <div class="column by3">
                    <about-me ref="aboutMe"/>
                </div>
            </div>
        </div>
        <div id="fb-root"></div>
        <script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=261021078105559&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    </div>
</template>

<script>
    export default {
        name: "base-article",
        data() {
            return {
                location: '',
                locationUriComponent: ''
            }
        },
        created() {
            this.location = window.location.href;
            this.locationUriComponent = window.encodeURIComponent(window.location.href);
        },
        mounted() {
            if (window.FB) {
                window.FB.init({
                    appId: '261021078105559',
                    status: true,
                    xfbml: true,
                    version: 'v3.2'
                });
            }

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