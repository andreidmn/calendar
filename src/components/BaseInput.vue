<template>
  <div class="base-input">
    <label :for="id || label">{{ label }}</label>
    <input :value="value"  :name="name" :type="type || 'text'" :id="id || label" :placeholder="placeholder" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: [ 'label',
    'id',
    'placeholder',
    'type',
    'name',
     'value'
  ],
  methods: {
    handleInput(event) {
      const obj = {
        name: this.name,
        value: event.target.value
      }
      this.$emit('handleInput', obj)
    }
  }
}
</script>

<style lang="scss">
.base-input {
  label {
    font-size: 14px;
  }
  input {
    width: 100%;
    height: 34px;
    font-size: 16px;
    border-width:0px;
    border-bottom:1px solid black;
    outline:none;
    margin-top: 6px;
    padding-left: 12px;
  }
}
</style>