<template>
    <div class="common-image">
        <a v-if="isMagnificPopUp" :href="src" :title="caption || alt">
            <img :src="src" :alt="alt">
        </a>
        <img v-else :src="src" :alt="alt">

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
            },
            isMagnificPopUp: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            hasCaption: function () {
                return this.caption.length > 0;
            }
        },
        mounted() {
            if (this.isMagnificPopUp) {
                window.$(this.$el).find('a').magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    image: {
                        verticalFit: false
                    }
                });
            }
        }
    }
</script>