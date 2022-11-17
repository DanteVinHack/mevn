<template>
<div class="input-field">
  <input 
    :id="placeholder" 
    :type="type ?? 'text'" 
    class="validate"
    @input="update"
  >
  <label :for="placeholder">{{ placeholder }}</label>
</div>
</template>

<script>
export default {
  name: 'VInput', 
  props: {
    modelValue: {
      type: String,
      required: false,
      default: undefined
    },
    type: {
      type: String,
      required: false,
      default: undefined
    },
    placeholder: {
      type: String,
      required: false,
      default: undefined
    }
  },
  methods: {
    update({ target }) {
      this.$emit('update:modelValue', target.value);
    }
  }
}
</script>

<style>
input {
  border-bottom-color: gray !important;
}

.input-field > label {
  color: gray !important;
}

input:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #8c27fe !important;
  box-shadow: 0 1px 0 0 #8c27fe !important;
}

input:not(.browser-default):focus:not([readonly]) ~ label {
  color: #8c27fe !important;
}
</style>