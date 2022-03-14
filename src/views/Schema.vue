<template>
    <main>
        <h1>Создать таблицу БД</h1>
        <form @submit.prevent="sendForm()">
            <form-block :name="'name'" :required="true" text="Имя таблицы" @updateData="updateData"/>
            <template v-for="i in id">
                <template v-if="i === id">
                    <form-row @updateData="updateData" @addRow="addRow()" @removeRow="removeRow()" :id="i" :current="id" :key="i"/>
                </template>
                <template v-else>
                    <form-row :id="i" :current="id" :key="i" @updateData="updateData"/>
                </template>
            </template>
            <button type="submit">Добавить таблицу</button>
        </form>
    </main>
</template>

<script>
import FormBlock from "../components/form-components/block";
import FormRow from "../components/form-components/row";
export default {
    name: "schema-view",
    components: {
        "form-block": FormBlock,
        "form-row": FormRow
    },
    data() {
        return {
            id: 1,
            table: {
                name: "",
                fields: [{}]
            }
        }
    },
    methods: {
        addRow() {
            this.table.fields.push({});
            this.id = this.table.fields.length;
            console.log(this.table);
        },
        removeRow() {
            this.id--;
        },
        async sendForm() {
            console.log(this.table.name);
            let body = {};
            this.table.fields.forEach(el => {
                body[el.name] = el.type
            });
            console.log(body);
            let resp = await fetch("http://localhost:3001/api/v1/table/create/test/" + this.table.name, {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            let data = await resp.json();
            if (data.msg === "All correct") {
                this.table.name = "";
                this.table.fields = [{}];
                this.id = this.table.fields.length;
                this.$emit("upd");
            }
        },
        updateData(id, name, val) {
            if (id) {
                this.table.fields[id - 1][name] = val;
            } else {
                this.table[name] = val;
            }
        }

    }
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
    h1 {
        margin-bottom: 24px;
    }
</style>