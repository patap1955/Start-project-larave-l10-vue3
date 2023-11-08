<template>
    <header class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/catalog">Каталог</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contacts">Контакты</router-link>
            </li>
        </ul>
    </header>
</template>

<script>

export default {
    components: {

    },
    name: "Header",
    data() {
        return {
            username: "Михаил"
        }
    }
}
</script>

<style scoped>

</style>

