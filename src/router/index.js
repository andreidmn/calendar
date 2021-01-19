import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from "../views/Calendar"
import NewEvent from "@/views/NewEvent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/calendar'
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/event',
        name: 'Event',
        component: NewEvent
    }
    ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router