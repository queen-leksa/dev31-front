<template>
    <main-header></main-header>
    <nav-bar :links="collections" :height="sizes.c"></nav-bar>
    <router-view :collections="collections" @upd="getCollections"/>
    <main-footer @setHeight="setSizes"></main-footer>
</template>

<script>
    import Header from "./components/main-content/Header";
    import Footer from "./components/main-content/Footer";
    import Navbar from "./components/main-content/Navbar";
    export default {
        components: {
            "main-header": Header,
            "main-footer": Footer,
            "nav-bar": Navbar
        },
        data() {
            return {
                links: ["Animals", "Users", "Flowers"],
                sizes: {},
                collections: {

                }
            }
        },
        methods: {
            setSizes(sizes) {
                this.sizes.h = sizes.h;
                this.sizes.c = sizes.c;
                this.sizes.f = sizes.f;
            },
            async getCollections() {
                const resp = await fetch("http://dev31-server.herokuapp.com/api/v1/collections/test/show");
                const info = await resp.json();
                if (info.msg === "ok") {
                    for (const val of info.data) {
                        this.collections[val.name] = val.fields;
                    }
                }
            }
        },
        mounted() {
            this.getCollections();
        }
    }
</script>
<style>
    body {
        font-family: "Ruda", sans-serif;
        margin: 0;
        overflow: hidden;
    }
    h1, h2, h3, h4, h5, h6, p, ul {
        margin: 0;
    }
    ul {
        padding: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    #app {
        display: flex;
        flex-wrap: wrap;
    }
</style>
