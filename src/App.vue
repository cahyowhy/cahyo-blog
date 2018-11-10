<!--suppress ALL -->
<template>
    <div id="app">
        <h1>cek</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to your prerender-spa-plugin Vuejs 2.0 demo app!'
            }
        }
    }
</script>

<style lang="scss" src="./style/app.scss">
</style>
