<template>
    <div class="index-page">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>