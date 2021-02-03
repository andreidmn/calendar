<template>
  <div class="profile">
    <h2> Profile</h2>
    <router-link to="/calendar">CALENDAR</router-link>
   <p>First Name: {{ profile.firstName }}</p>
   <p>Last Name: {{ profile.lastName }}</p>
   <p>Age: {{ profile.age }}</p>
    <router-link to="/profile/edit">Edit</router-link>
  </div>
</template>
<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile
    }
  }
}
</script>

<style lang="scss">
.profile{
  text-align: center;
}
</style>