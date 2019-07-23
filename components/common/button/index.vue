<template lang="pug">
  button.button-component(
    :class="classList"
    @click="click"
    @focus="$emit('focus')")
    slot
</template>

<script>
export default {
  name: 'button-component',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  },
  computed: {
    classList () {
      let classes = `button-type-${this.type} button-size-${this.size}`
      if (this.disabled) {
        classes += ' button-disabled'
      }
      return classes
    }
  },
  methods: {
    click () {
      if (this.disabled) {
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-component {
    //
  }
</style>
