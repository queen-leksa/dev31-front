<template>
    <main>
        <h1>{{ $route.params.name }}</h1>
        <div class="container" v-for="data in collections[$route.params.name]" :key="data">
            {{ data }}
        </div>
    </main>
</template>

<script>
    export default {
        name: "main-view",
        props: ["collections"]
    }
</script>

<style scoped>
main {
    padding: 24px;
    box-sizing: border-box;
    width: calc(100% - 300px);
    background-color: var(--light);
    color: var(--dark);
}
</style>