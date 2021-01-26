import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from "../views/Calendar"
import NewEvent from "@/views/NewEvent";
import Register from "@/auth/Register";
import Login from "@/auth/Login";
import Profile from "@/views/Profile";
import EditEvent from "@/views/EditEvent";

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
    },
    {
        path: '/event/:id',
        name: 'EditEvent',
        component: EditEvent
    },
    {
        path: '/register',
        name : "Register",
        component: Register
    },
    {
        path: '/login',
        name : 'Login',
        component: Login
    },
    {
        path: '/profile',
        name : 'Profile',
        component: Profile
    }
    ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router