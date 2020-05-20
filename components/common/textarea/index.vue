<template lang="pug">
  .textarea-component(:class="{ 'textarea-component-error': error }")
    label(v-if="$slots.default" :for="localId")
      slot
    textarea(
      ref="field"
      :id="localId"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :rows="rows"
      :readonly="readonly"
      :disabled="disabled"
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
  name: 'textarea-component',
  props: {
    id: String,

    // Значение атрибута "name" у поля
    name: String,

    // Реактивное значение поля
    value: [String, Number],

    // Текст или флаг с ошибкой
    error: [String, Boolean],

    // Количество строк, высота textarea
    rows: {
      type: Number,
      default: 3
    },

    // Текст-подсказка в поле
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
        this.$refs.field.focus()
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
