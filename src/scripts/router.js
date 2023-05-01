import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Chatting from "@/pages/Chatting.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path:'/home', component: Home},
    {path: '/login', component: Login},
    {path: '/', component: Chatting}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;