import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        events: []
    }
    ,
    mutations: {
        UPDATE_EVENTS (state, payload) {
            Vue.set(state, 'events', payload);
        }
    },
    actions: {
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
        async save (context, payload) {
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
    },

})