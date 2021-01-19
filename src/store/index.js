import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        events: [
            {nume: 'meeting', ora: '12 20', ziua:"duminica"},
            {nume: 'intalnire', ora: '14 00', ziua:"duminica"},
            {nume: 'meeting', ora: '12 20',  ziua:"duminica"}
        ]
    }
    ,
    mutations: {},
    actions: {
        save: async function (context, payload) {
            try {
                await axios({
                    method: 'POST',
                    url: '/event'
                })
                console.log(context)
                console.log(payload)
            } catch (err) {
                console.log(err)
            }
        }
    },

})