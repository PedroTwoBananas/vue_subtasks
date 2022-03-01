import {createRouter, createWebHistory} from "vue-router";
import Main from "@/components/pages/Main";
import EditedTask from "@/components/pages/EditedTask";

const routes = [
    {
        path: `/`,
        component: Main
    },
    {
        path: '/task/:id',
        component: EditedTask
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;