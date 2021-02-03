<template>
  <div class="register-page">
    <h2>Register</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <div v-if="registerSuccessfully">
      <p>V-ati inregistrat cu succes!</p>
      <router-link to="/login">Login</router-link>
    </div>
    <BaseForm v-else btnTxt="Register" @handleSubmit="handleSubmit">
      <BaseInput name="email" placeholder="user" @handleInput="handleInput"/>
      <BaseInput name="password" type="password" placeholder="enter your password" @handleInput="handleInput"/>
      <BaseInput name="repeatPassword" placeholder="enter your password" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('register', this.form);
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  },
  computed: {
    registerSuccessfully () {
      return this.$store.state.registerSuccessfully
    }
  }
  }
</script>

<style lang="scss">
  .register-page {
    text-align: center;
  }
</style>