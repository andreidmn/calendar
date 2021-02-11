import axios from "axios";
import router from "@/router";

export const actions = {
    async delete_events ({commit}, id) {
        const response = await axios.delete(`/api/event/${id}`)
        if(response.status === 200 || response.status === 204){
            commit('DELETE_EVENT', id)
            console.log(response)
            await router.push('/calendar');
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
            router.push('/')


        } catch (err) {
            console.log(err)
        }
    }
}