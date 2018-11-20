<template>
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