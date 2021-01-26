<template>
  <div class="edit-event">
    <h2>Edit Event</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm btnTxt="Save" @handleSubmit="handleSubmit">
      <BaseInput name="nume" placeholder="nume" :value="event.nume" @handleInput="handleInput" />
      <BaseInput name="ora" placeholder="ora" :value="event.ora" @handleInput="handleInput"/>
      <BaseInput name="ziua" placeholder="ziua" :value="event.ziua" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>
<script>
export default {
  name: "EditEvent",
  data() {
    return {
      form: {
        nume: undefined,
        ora: undefined,
        ziua: undefined
      }
    }
  },
  computed: {
    event () { return this.$store.state.event }
  },
  methods: {
    handleSubmit () {
      this.form.id = this.event.id;
      this.$store.dispatch('update_event', this.form)
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  },
  created () { this.$store.dispatch('get_event', this.$router.currentRoute.params.id) }
}
</script>

<style scoped>

</style>