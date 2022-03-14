<template>
    <div class="form-block">
        <label :for="setId()">{{text}}</label>
        <template v-if="type">
            <select :id="setId()" :name="setId()" v-model="value" @change="$emit('updateData', id, name, value)">
                <option selected>string</option>
                <option>number</option>
                <option>boolean</option>
                <option>object</option>
            </select>
        </template>
        <template v-else>
            <input :id="setId()" type="text" :name="setId()" :required="required" v-model="value" @change="$emit('updateData', id, name, value)"/>
        </template>
    </div>
</template>

<script>
export default {
    name: "form-block",
    props: ["id", "name", "text", "type", "required", "mod"],
    data() {
        return {
            value: ""
        }
    },
    methods: {
        setId() {
            return this.id >= 0 ? `${this.name}-${this.id}` : this.name;
        }
    }
}
</script>

<style scoped>
    .form-block {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 20px;
    }
</style>