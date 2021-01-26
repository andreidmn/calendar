<template>
  <div class="register-page">
    <h2>Register</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm btnTxt="Register" @handleSubmit="handleSubmit">
      <BaseInput name="user" placeholder="user"  @handleInput="handleInput"/>
      <BaseInput name="password" placeholder="enter your password"  @handleInput="handleInput" />
      <BaseInput name="repeatPassword" placeholder="enter your password"  @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        user: undefined,
        password: undefined,
        repeatPassword: undefined
      }
    }
  },
  computed: {
    user () { return this.$store.state.user}
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('register',this.form )
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  }
  }
</script>

<style lang="scss">
.register-page {
  text-align: center;
}
</style>