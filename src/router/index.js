import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Main from "../views/Main";
import Schema from "../views/Schema";

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: Home
  },
  {
    path: "/schema",
    name: "schema-view",
    component: Schema
  },
  {
    path: "/col/:name",
    name: "main-view",
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
