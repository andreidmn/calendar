<template>
  <div class="login-page">
    <h2>Login</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <router-link to="/register">Register</router-link>

    <BaseForm btnTxt="Login" @handleSubmit="handleSubmit" >
      <BaseInput name="username" placeholder="username" @handleInput="handleInput"/>
      <BaseInput name="password" placeholder="enter your password" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('login', this.form)
    },
    handleInput({name, value}) {
      this.form[name] = value;
    }
  }
}
</script>

<style lang="scss">
.login-page {
  text-align: center;
}
</style>