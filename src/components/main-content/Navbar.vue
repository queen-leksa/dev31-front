<template>
    <nav :style="{height: height + 'px'}" >
        <ul class="menu">
            <li><router-link to="/schema">Создать коллекцию</router-link></li>
            <li>Коллекции
                <ul class="submenu">
                    <li v-for="(link, key) in links" :key="key">
                        <router-link :to="'/col/'+key">{{key}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "nav-bar",
    props: ["links", "height", "setHeight"],
}
</script>

<style scoped>
    nav {
        width: 300px;
        border-right: 1px solid var(--dark);
        box-sizing: border-box;
        padding: 24px;
        background-color: var(--grey);
    }
</style>