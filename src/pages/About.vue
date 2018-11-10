<template>
    <h1>ABOUT</h1>
</template>

<script>
    /*<meta name="og:title" property="og:title" content="Test title - My page">*/
    export default {
        name: "about",
        metaInfo: {
            title: 'About Cahyo Wibowo',
            meta: [
                {
                    'property': 'og:title',
                    'template': chunk => `${chunk}`, //or as string template: '%s - My page',
                    'content': 'About Cahyo Wibowo',
                    'vmid': 'og:title'
                }
            ]
        }
    }
</script>