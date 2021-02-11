import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from "@/router";
import * as auth from './modules/auth';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        event: {},
        events: [],
        eventsCopy: [],
        user: {},
        profile: {},
        registerSuccessfully: false
    },
    mutations: {
        DELETE_EVENT (state,eventId) {
            state.events = state.events.filter(event => event.id !== eventId);
        },
        UPDATE_EVENTS (state, payload) {
            Vue.set(state, 'events', payload);
        },
        CREATE_USER (state, payload) {
            Vue.set(state, 'user', payload);
        },
        SET_STATE (state, payload) {
            Vue.set(state, payload.key, payload.value);
        },
        FILTER_EVENTS (state, { day, month, year }) {
            if (!state.eventsCopy.length) {
                Vue.set(state, 'eventsCopy', state.events.slice());
            }
            const events =
                state.eventsCopy
                    .filter(event => {
                        const d = new Date(event.date);
                        return +d.getDate() === +day && +d.getMonth() === +month && +d.getFullYear() === +year
                    })
                    .map(obj => obj);
            Vue.set(state, 'events', events);
        },
        CLEAR_FILTER_EVENTS (state) {
            Vue.set(state, 'events', state.eventsCopy.slice());
            Vue.set(state, 'eventsCopy', []);
        }
    },
    actions: {
        async delete_events ({commit},id) {
            const response = await axios.delete(`/api/event/${id}`)
            if(response.status === 200 || response.status === 204){
                commit('DELETE_EVENT', event)
                console.log(response)
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
            console.log(response)
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
        async get_events (context, payload) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url:'/api/event',
                    data: payload,
                })
                // const events = data.filter(obj => obj.value.name).map(obj => obj.value);
                context.commit('UPDATE_EVENTS', data) // data estacum un obiect ce contine o prop care are un array cu events. ma intereseaza sa trimit in commit doar matricea cu eventssi nu obiectul
            }
            catch (e) {
                console.log(e)
            }
        },
        async create_events (context, payload) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: '/api/event',
                    data: payload
                })
                context.commit('UPDATE_EVENTS', data)
                console.log(data)
                /*setTimeout(function () {
                    router.push('/')
                }, 1000)*/

            } catch (err) {
                console.log(err)
            }
        }
    },
    modules: {
        auth
    }
})