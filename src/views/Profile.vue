<template>
  <div class="profile">
    <h2>Profile</h2>
    <router-link to="/calendar">CALENDAR</router-link>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="firstName"  placeholder="firstName" />
      <BaseInput name="lastName"  placeholder="lastName" />
      <BaseInput name="age"   placeholder="age" />
      <BaseInput name="address"   placeholder="address"/>
      <BaseInput name="city"   placeholder="city" />
      <BaseInput name="country"   placeholder="country" />
      <BaseInput name="telephone"   placeholder="telephone" />
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
        firstName: undefined,
        lastName: undefined,
        age: undefined,
        address: undefined,
        city: undefined,
        country: undefined,
        telephone: undefined
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch("save", {formData: this.form})
      router.push('/');
    }
  }
}
</script>

<style scoped>

</style>