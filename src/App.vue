<!--suppress ALL -->
<template>
    <div id="app">
        <div class="wrapper">
            <div class="logo-wrp">
                <h1>
                    <router-link to="/">CAHYO WIBOWO</router-link>
                </h1>
                <h6>
                    <span>Daily blog about everything</span>
                    <span>{{date}}</span>
                </h6>
            </div>
            <router-view/>
        </div>
        <div class="footer">
            <div class="inner-foot"><h5>Made by lust by cahyo © 2018.</h5></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date().toDateString()
            }
        }
    }
</script>

<style lang="scss" src="./style/app.scss">
</style>
