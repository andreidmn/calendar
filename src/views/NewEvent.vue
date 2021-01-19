<template>
  <div>
    <h2>Add New Event</h2>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="email" label="email" placeholder="your email address" @handleInput="handleInput"/>
      <BaseInput name="username" label="username" placeholder="your username" @handleInput="handleInput"/>
      <BaseInput name="password" type="password" label="password" placeholder="your password" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>
<script>
export default {
  name: "NewEvent",
  data() {
    return {
      form: new FormData()
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch("save", {formData: this.form})
    },
    handleInput ({ name, value }) {
      this.form.append(name, value);
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

</style>