<template>
    <div class="common-image">
        <img :src="src" :alt="alt">
        <div v-if="hasCaption" class="caption-wrp">
            <p>"{{caption}}"</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "common-image",
        props: {
            src: {
                type: String,
                default: '',
                required: true
            },
            alt: {
                type: String,
                default: ''
            },
            caption: {
                type: String,
                default: '',
            }
        },
        computed: {
            hasCaption: function () {
                return this.caption.length > 0;
            }
        }
    }
</script>