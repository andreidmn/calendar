import axios from "axios";
import router from "@/router";

export const state = {
    user: {
        name: 'ANDREI'
    }
}

export const actions = {
    async logout(context) {
        try {
            const {data} = await axios({
                method: 'DELETE',
                url: '/api/auth/logout',
            })

            context.commit('CREATE_USER', data)
            await router.push('/login')
        } catch (err) {
        }
    },
    async check_login({state, commit }, next) {
        try {
            const { data } = await axios('/api/auth/check-login');
            data.name ? next() : next('/login');
            data.name && commit('CREATE_USER', data);
        }
        catch (e) {
            console.log(e);
        }
    },
    async register ({ commit }, payload) {
        try {
            const { data } = await axios({
                method: 'POST',
                url: '/api/auth/signup',
                data: payload
            })
            commit('SET_STATE', { key: 'registerSuccessfully', value: true });
        } catch (err) {
            console.log(err)
        }
    },
    async login(context, payload) {
        try {
            const {data} = await axios({
                method: 'POST',
                url: '/api/auth/login',
                data: payload
            })
            console.log(context)
            console.log(payload)
            context.commit('CREATE_USER', data)
            await router.push('/calendar')
        } catch (err) {
            console.log(err)
        }
    }
}