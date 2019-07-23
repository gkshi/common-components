<template lang="pug">
  .input-component
    label(:for="id")
      slot
    input(
      :id="id"
      :type="type"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)")
</template>

<script>
export default {
  name: 'input-component',
  props: {
    id: {
      type: String,
      default: () => Math.random().toFixed(7).slice(2)
    },
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .input-component {
    label {
      display: block;
    }
    input {
      display: block;
    }
  }
</style>
