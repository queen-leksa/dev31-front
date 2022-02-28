<template>
    <main>
        <h1>Главная</h1>
    </main>
</template>

<script>
    export default {
        name: "home-view"
    }
</script>

<style scoped>
    main {
        padding: 24px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(100% - 300px);
        background-color: var(--light);
        color: var(--dark);
    }
</style>