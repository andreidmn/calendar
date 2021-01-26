<template>
  <div class="new-event">
    <h2>Add New Event</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="name"  placeholder="name" />
      <BaseInput name="details"  placeholder="details" />
      <BaseInput name="date"   placeholder="date" />
      <BaseInput name="time"   placeholder="time"/>
      <BaseInput name="url"   placeholder="url" />
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
        title: undefined,
        details: undefined,
        date: undefined,
        time: undefined,
        url: undefined
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch("save", {formData: this.form})
      router.push('/')
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