import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from "@/router";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        event: {},
        events: [],
        user: {},
        profile: {},
        registerSuccessfully: false,

     },
    mutations: {
        UPDATE_EVENTS (state, payload) {
            Vue.set(state, 'events', payload);
        },
        CREATE_USER (state, payload) {
            Vue.set(state, 'user', payload);
        },
        SET_STATE (state, payload) {
            Vue.set(state, payload.key, payload.value);
        },
        FILTER_EVENTS(state, event) {
            const filteredEvents = state.events.filter(obj => obj.data === event.date)
            Vue.set(state, 'events', filteredEvents)
        }
    },
    actions: {
        deleteEvent () {

        },
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
        }
        ,
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
        },
        async update_event (context, event) {
            const url = `/api/event/${event.id}`
            const response = await axios.put(url, event);
            context.commit('SET_STATE', {
                key: 'event',
                value: response.data
            });
            console.log(event)
            await router.push('/calendar');
        },
        async update_profile(context, payload) {
            try {
                const response = await axios({
                    method: 'PUT',
                    url: '/api/profile',
                    data: payload
                })
                context.commit('SET_STATE',{
                    key: 'profile',
                    value: response.data
                })
                await router.push('/profile')
            } catch (err) {
                console.log(err)
            }
        },
        async get_event (context, id) {
            const url = `/api/event/${id}`
            const eventFromAxiosResponse = await axios.get(url);
            context.commit('SET_STATE', {
                key: 'event',
                value: eventFromAxiosResponse.data
            });
        },
        async get_events (context) {
            try {
                // get events from database/backend
                const url = '/api/event'
                const response = await axios.get(url);
                context.commit('UPDATE_EVENTS', response.data.rows)
                console.log(response.data.rows)
            }
            catch (e) {
                console.log(e)
            }
        },
        save: async function (context, payload) {
            try {
                const response = await axios({
                    method: 'POST',
                    url: '/api/event',
                    data: payload
                })
                console.log(payload)
                context.commit('UPDATE_EVENTS', response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }
})