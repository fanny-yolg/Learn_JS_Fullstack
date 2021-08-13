import { createRouter, createWebHistory } from "vue-router";
import Catalogue from "./components/Catalogue.vue";
import BookManagement from "./components/BookManagement.vue";

const routes = [
    {
        path: "/",
        component: Catalogue
    },
    {
        path: "/book-management",
        component: BookManagement
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;