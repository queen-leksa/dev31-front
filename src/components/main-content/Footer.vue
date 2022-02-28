<template>
    <footer>©{{year}}</footer>
</template>

<script>
export default {
    name: "main-footer",
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
    methods: {
        getHeight() {
            let header = document.querySelector("header");
            let footer = document.querySelector("footer");
            let sizes = {};
            sizes.h = header.offsetHeight;
            sizes.f = footer.offsetHeight;
            sizes.c = window.innerHeight - sizes.h - sizes.f;
            this.$emit("setHeight", sizes);
        }
    },
    mounted() {
        this.getHeight();
    }
}
</script>

<style scoped>
    footer {
        width: 100%;
        padding: 24px;
        border-top: 2px solid var(--dark);
        background-color: var(--main);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
    }
</style>