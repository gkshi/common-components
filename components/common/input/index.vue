<template lang="pug">
  .input-component(:class="classList")
    label(v-if="$slots.default" :for="localId")
      slot
    input(
      ref="input"
      :id="localId"
      :name="name"
      :type="native"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :autofocus="autofocus"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @keyup="$emit('keyup', $event)"
      @paste="paste")
    .error(v-if="error") {{ errorText }}
</template>

<script>
export default {
  name: 'input-component',
  props: {
    id: String,
    name: String,
    native: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: 'default'
    },
    value: [String, Number],
    error: [String, Boolean],
    placeholder: String,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      localId: this.id
    }
  },
  computed: {
    classList () {
      let str = `input-type-${this.type}`
      if (this.error) {
        str += ' input-component-error'
      }
      return str
    },
    errorText () {
      return typeof this.error === 'string' ? this.error : 'Error'
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    if (this.autofocus) {
      this.focus()
    }
  },
  methods: {
    focus () {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    select () {
      this.$nextTick(() => {
        this.$refs.input.focus()
        this.$refs.input.select()
      })
    },
    paste (e) {
      e.preventDefault()
      const value = e.clipboardData.getData('Text')
      this.$emit('input', value)
      this.$emit('paste', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-component {
    //
  }
</style>
