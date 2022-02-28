<template>
    <header>
        <router-link to="/">
            <img src="/img/logo_light.svg" alt="IThub" title="College IThub">
        </router-link>
        <h3>FullStack масштабируемое приложение<br>группы 3Р1.19</h3>
    </header>
</template>

<script>
    export default {
        name: "main-header"
    }
</script>

<style scoped>
    header {
        width: 100%;
        padding: 24px;
        border-bottom: 2px solid var(--dark);
        background-color: var(--main);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img {
        height: 4rem;
        line-height: 1;
    }
    h3 {
        font-family: "Underdog", cursive;
        color: white;
        text-align: right;
        font-size: 1.5rem;
    }
</style>