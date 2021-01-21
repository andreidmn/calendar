<template>
  <div class="new-event">
    <h2>Add New Event</h2>
    <BaseForm  btnTxt="Save" @handleSubmit="handleSubmit" >
      <BaseInput name="name"  placeholder="name" @handleInput="handleInput"/>
      <BaseInput name="date"  placeholder="date" @handleInput="handleInput"/>
      <div class="big-input">
        <BaseInput class="small-input" name="name"  placeholder="0 0" @handleInput="handleInput"/>
        <BaseInput class="small-input" name="date"  placeholder="0 0" @handleInput="handleInput"/>
        <BaseInput class="small-input" name="link"   placeholder="0 0" @handleInput="handleInput"/>
        <BaseInput class="small-input" name="project"   placeholder="0 0" @handleInput="handleInput"/>
      </div>
      <BaseInput name="link"   placeholder="link" @handleInput="handleInput"/>
      <BaseInput name="project"   placeholder="project name" @handleInput="handleInput"/>
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
.new-event {
  margin-top:4rem ;
  h2 {
    text-align: center;
  }
  .big-input {
    display: flex;
    justify-content: space-between;
    .small-input {
     margin: 0 5px;
    }
  }
}


</style>