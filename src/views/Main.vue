<template>
    <main>
        <h1>{{ $route.params.name }}</h1>
    </main>
</template>

<script>
    export default {
        name: "main-view"
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