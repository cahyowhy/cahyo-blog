<template>
    <div class="article-page row is-block">
        <div class="column by1-3">
            <div class="content">
                <slot></slot>
            </div>
            <div class="comment-section">
                <div class="fb-comments"
                     data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                     data-width="100%" data-numposts="5"></div>
            </div>
        </div>
        <div class="column by3">
            <about-me/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-article"
    }
</script>