import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from "@/router";
import * as auth from './modules/auth';
import * as eventsLogic from './modules/eventsLogic'

import {format} from 'date-fns'
import {parseJSON} from 'date-fns'


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        eventsClone: [],
        event: {},
        events: [],
        eventsCopy: [],
        user: {},
        profile: {},
        registerSuccessfully: false
    },
    mutations: {
        SEARCH_EVENTS_BY_NAME(state, search) {
            if (!state.eventsClone.length) {
                Vue.set(state, 'eventsClone', state.events);
            }
            const events = state.eventsClone.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase()))
            Vue.set(state, 'events', search ? events : state.eventsClone);
            !search && Vue.set(state, 'eventsClone', []);
        },
        SET_DATE(state) {
            state.events.map(event => {
                    /* if (event.date instanceof Date)*/
                    return event.date = format(new Date(event.date), 'yyyy MMMM dd')
                }
            )
        },
        DELETE_EVENT(state, eventId) {
            state.events = state.events.filter(event => event.id !== eventId);
        },
        UPDATE_EVENTS(state, payload) {
            Vue.set(state, 'events', payload);
        },
        CREATE_USER(state, payload) {
            Vue.set(state, 'user', payload);
        },
        SET_STATE(state, payload) {
            Vue.set(state, payload.key, payload.value);
        },
        FILTER_EVENTS(state, {day, month, year}) {
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
        CLEAR_FILTER_EVENTS(state) {
            Vue.set(state, 'events', state.eventsCopy.slice());
        }
    },
    actions: {},
    modules: {
        auth,
        eventsLogic
    }
})