<template>
  <form class="base-form" @submit.prevent="handleSubmit">
    <slot/>
    <button cypress="button">{{btnTxt}}</button>
  </form>
</template>

<script>
export default {
  name: "BaseForm",
  props: [
    "btnTxt"
  ],
  methods: {
    handleSubmit() {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style lang="scss">
.base-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  text-align: left;
.base-input {
  margin-bottom: 12px;
}
button {
  border: none;
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  border-radius: 4px;
  background-color: greenyellow;
  transition: background-color 300ms ease-in-out;
  font-size: 16px;
&:hover {
   background-color: darken(greenyellow, 20%);
 }
&:disabled {
   opacity: 0.5;
 }
}
}
</style>