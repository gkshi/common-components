<template lang="pug">
  .counter-component
    label(:for="localId")
      slot
    .flex
      .minus(@click="minus")
        div -

      input(
        ref="input"
        :id="localId"
        type="number"
        :value.number="value"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @input="input"
        @change="change"
        :min.prop="min ? min : !negative ? 0 : false"
        :max.prop="max ? max : false"
        @focus="$emit('focus', $event.target.value)"
        @blur="blur")

      .plus(@click="plus")
        div +
</template>

<script>
export default {
  name: 'counter-component',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // ID поля
    id: String,

    // Значение поля (реактивно)
    value: [String, Number],

    // Шаг, с которым изменяется значение при нажатии на + и -
    step: {
      type: Number,
      default: 1
    },

    // Задержка в мс до срабатывания "change" (при вводе значения в поле руками)
    inputDelay: {
      type: [String, Number],
      default: 300
    },

    // Минимальный допустимый предел значения
    min: [Number, String],

    // Максимальный допустимый предел значения
    max: [Number, String],

    // Текст-подсказка в поле
    placeholder: String,

    // Автофокусировка в поле
    autofocus: Boolean,

    // Может ли значение быть отрицательным
    negative: Boolean,

    // Только для чтения
    readonly: Boolean,

    // Состояние неактивности
    disabled: Boolean
  },
  data () {
    return {
      localId: this.id,
      timeout: null,
      localMin: this.min
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    this.$refs.input.addEventListener('paste', this.paste)
  },
  beforeDestroy () {
    this.$refs.input.removeEventListener('paste', this.paste)
  },
  methods: {
    validate (value) {
      value = parseInt(value)
      if (isNaN(value) || typeof value !== 'number') {
        value = 0
      }
      if (!this.negative) {
        value = value > 0 ? value : 0
      }
      if (this.min) {
        value = value > +this.min ? value : +this.min
      }
      if (this.max) {
        value = value < +this.max ? value : +this.max
      }
      return value
    },
    paste (e) {
      e.preventDefault()
      const val = Number(e.clipboardData.getData('Text'))
      this.$emit('change', this.validate(val))
    },
    input (e) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('change', this.validate(e.target.value))
      }, +this.inputDelay)
    },
    change (e) {
      this.$emit('change', this.validate(e.target.value))
      e.target.value = this.validate(e.target.value)
    },
    blur (e) {
      clearTimeout(this.timeout)
      this.$emit('blur', e.target.value)
    },
    minus () {
      this.$emit('change', this.validate(+this.value - this.step))
    },
    plus () {
      this.$emit('change', this.validate(+this.value + this.step))
    }
  }
}
</script>

<style lang="scss" scoped>
  .counter-component {
    // your custom styles here
  }
</style>
