<template>
    <Header />
    <h1>Привет {{ username }} !</h1>
    <main class="container">
        <router-view />
    </main>

</template>

<script>
import Header from "@/components/layouts/Header.vue"
export default {
    components: {
        Header,

    },
    name: "App",
    data() {
        return {
            username: "Михаил"
        }
    }
}
</script>

<style scoped>

</style>
