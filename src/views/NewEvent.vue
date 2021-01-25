<template>
  <div class="new-event">
    <h2>Add New Event</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="nume"  placeholder="nume" @handleInput="handleInput"/>
      <BaseInput name="ziua"  placeholder="ziua" @handleInput="handleInput"/>
      <BaseInput name="ora"   placeholder="ora" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>
<script>
export default {
  name: "NewEvent",
  data() {
    return {
      form: {
        nume: undefined,
        ora: undefined,
        ziua: undefined,
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch("save", {formData: this.form})
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