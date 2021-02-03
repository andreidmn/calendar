import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from "../views/Calendar"
import NewEvent from "@/views/NewEvent";
import Register from "@/auth/Register";
import Login from "@/auth/Login";
import Profile from "@/views/Profile";
import EditEvent from "@/views/EditEvent";
import EditProfile from "@/views/EditProfile";
import store from '../store';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/calendar'
    },
    {
        path: '/calendar',
        name: 'Calendar',
        meta: {
            auth: true
        },
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
    },
    {
        path: '/profile/edit',
        name : 'EditProfile',
        component: EditProfile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach(function (to, from, next) {
    if (to.meta.auth) {
        store.state.user.name
            ? next()
            : store.dispatch('check_login', next);
    }
    else {
        next();
    }
})


export default router