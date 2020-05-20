<template lang="pug">
  .button-component(@click="click" :class="{ disabled }")
    // тег "a"
    a.button(
      v-if="href"
      :class="classList"
      role="button"
      :href="href"
      :target="target"
      @focus="$emit('focus')"
      @blur="$emit('blur')")
      slot

    // тег "nuxt-link"
    nuxt-link.button(
      v-else-if="to"
      :class="classList"
      role="button"
      :to="to"
      @focus="$emit('focus')"
      @blur="$emit('blur')")
      slot

    // тег "button"
    button.button(
      v-else
      :class="classList"
      role="button"
      :form="form"
      :type="native"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      :disabled="disabled")
      slot
</template>

<script>
export default {
  name: 'button-component',
  props: {
    // Внешний вид кнопки (типы описаны в index.scss)
    type: {
      type: String,
      default: 'default'
    },

    // Размер кнопки (размеры описаны в index.scss)
    size: {
      type: String,
      default: 'default'
    },

    // Значение атрибута type у элемента button
    native: {
      type: String,
      default: 'button' // button, submit, confirm
    },

    // Значение атрибута form (только для кнопок с тегом "button")
    form: String,

    // Значение атрибута href (только для ссылок с тегом "a")
    href: String,

    // Значение атрибута to (только для ссылок с тегом "nuxt-link")
    to: String,

    // Значение атрибута target (только для ссылок с тегом "a")
    target: {
      type: String,
      default: '_blank' // _blank, _self
    },

    // Состояние неактивности
    disabled: Boolean
  },
  computed: {
    classList () {
      let string = `button-type-${this.type} button-size-${this.size}`
      if (this.bordered) {
        string += ' button-bordered'
      }
      return string
    }
  },
  methods: {
    click (e) {
      if (this.disabled) {
        return e
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-component {
    // Your custom styles here
  }
</style>
