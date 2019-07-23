<template lang="pug">
  .textarea-component
    label(:for="id")
      slot
    textarea(
      :id="id"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)")
</template>

<script>
export default {
  name: 'textarea-component',
  props: {
    id: {
      type: String,
      default: () => Math.random().toFixed(7).slice(2)
    },
    value: [String, Number],
    readonly: Boolean,
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .textarea-component {
    label {
      display: block;
    }
    textarea {
      display: block;
      max-width: 100%;
    }
  }
</style>
