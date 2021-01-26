import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from "@/router";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        events: [],
        event: {},
        user: {}
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
        DELETE_EVENT (state, index) {
            state.events.splice(index, 1)
        }
    },
    actions: {
        async register (context, payload) {
            try {
                const response = await axios({
                    method: 'POST',
                    url: '/api/register',
                    data: payload
                })
                context.commit('CREATE_USER', response.data)
                await router.push('/calendar')
            } catch (err) {
                console.log(err)
            }
        },
        async update_event (context, event) {
            const url = `/api/event/${event.id}`
            const response = await axios.put(url, event);
            context.commit('SET_STATE', {
                key: 'events',
                value: response.data
            });
            await router.push('/calendar');
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
                const url = '/api/events'
                const response = await axios.get(url);
                context.commit('UPDATE_EVENTS', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        save: async function (context, payload) {
            try {
                const response = await axios({
                    method: 'POST',
                    url: 'api/events',
                    data: payload
                })
                context.commit('UPDATE_EVENTS', response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }
})