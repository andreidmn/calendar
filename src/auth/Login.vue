<template>
  <div class="login-page">
    <h2>Login</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm btnTxt="Login" >
      <BaseInput name="user" placeholder="user" @handleInput="handleInput"/>
      <BaseInput name="password" placeholder="enter your password" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
  }}
</script>

<style lang="scss">
.login-page {
  text-align: center;
}
</style>