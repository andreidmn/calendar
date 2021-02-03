<template>
  <div class="new-event">
    <h2>Add New Event</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="name" placeholder="Title"  @handleInput="handleInput" />
      <BaseInput name="details" placeholder="Details"  @handleInput="handleInput"/>
      <BaseInput name="date" placeholder="Date"  @handleInput="handleInput"/>
      <BaseInput name="time" placeholder="Time"  @handleInput="handleInput"/>
      <BaseInput name="url" placeholder="URL"  @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "NewEvent",
  data() {
    return {
      form: {
        name: undefined,
        details: undefined,
        date: undefined,
        time: undefined,
        url: undefined
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch("save",  this.form)
      router.push('/')
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  }
}
</script>

<style lang="scss">
.new-event {
  margin-top:4rem ;
  h2 {
    text-align: center;
  }
  .big-input {
    display: flex;
    justify-content: space-between;
    .small-input {
     margin: 0 5px;
    }
  }
}


</style>