<template>
    <div class="form-row">
        <form-block :id="id" :name="'name'" :required="true" :text="'Название поля'" @updateData="upd"></form-block>
        <form-block :id="id" :name="'type'" :type="true" :required="false" :text="'Тип поля'" @updateData="upd"></form-block>
        <button @click="this.$emit('addRow')" type="button" v-if="id === current">+</button>
        <button @click="$emit('removeRow')" type="button" v-if="id === current && id !==  1">x</button>
    </div>
</template>

<script>
import FormBlock from "./block";

export default {
    name: "form-row",
    props: ["id", "current", "mod"],
    components: {FormBlock},
    methods: {
        upd(id, name, val) {
            this.$emit("updateData", id, name, val)
        }
    }
}
</script>

<style scoped>
    .form-row {
        display: flex;
        align-items: center;
        gap: 24px;
    }
</style>