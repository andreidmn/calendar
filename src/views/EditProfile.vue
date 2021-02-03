<template>
  <div class="edit-profile">
    <h2>Edit Profile</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm btnTxt="Save" @handleSubmit="handleSubmit">
      <BaseInput name="firstName" :value="profile.firstName" placeholder="firstName" @handleInput="handleInput"/>
      <BaseInput name="lastName" :value="profile.lastName" placeholder="lastName" @handleInput="handleInput"/>
      <BaseInput name="age" :value="profile.age" placeholder="age" @handleInput="handleInput"/>
    </BaseForm>
  </div>
</template>
<script>
export default {
  name: "EditProfile",
  data() {
    return {
      form: {
        firstName: undefined,
        lastName: undefined,
        age: undefined
      }
    }
  },
  computed: {
    profile () { return this.$store.state.profile}
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('update_profile',this.form )
    },
    handleInput ({ name, value }) {
      this.form[name] = value;
    }
  }
}
</script>
<style lang="scss">
.edit-profile{
  text-align: center;
}
</style>