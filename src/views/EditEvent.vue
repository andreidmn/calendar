<template>
  <div class="edit-event">
    <h2>Edit Event</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm btnTxt="Save" @handleSubmit="handleSubmit">
      <BaseInput name="name" placeholder="Title" :value="event.name" @handleInput="handleInput" />
      <BaseInput name="details" placeholder="Details"  :value="event.details" @handleInput="handleInput"/>
      <BaseInput name="date" placeholder="Date" :value="event.date" @handleInput="handleInput"/>
      <BaseInput name="time" placeholder="Time" :value="event.time" @handleInput="handleInput"/>
      <BaseInput name="url" placeholder="URL" :value="event.url" @handleInput="handleInput"/>
    </BaseForm>
    <button @click="deleteEvents(event.id)">Delete</button>
  </div>
</template>
<script>
export default {
  name: "EditEvent",
  data() {
    return {
        form: {
          name: undefined,
          details: undefined,
          date: undefined,
          time: undefined,
          url: undefined,
      }
    }
  },
  computed: {
    event () { return this.$store.state.event }
  },
  methods: {
    deleteEvents(id) {
      id = this.$route.params.id
      this.$store.dispatch('delete_events', id)
    },
    handleSubmit () {
      this.form.id = this.$route.params.id
      this.$store.dispatch('update_event', this.form)
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  },
  created () {
    this.$store.dispatch('get_event', this.$router.currentRoute.params.id)
  }
}
</script>

<style scoped>

</style>