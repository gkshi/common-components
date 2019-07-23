<template lang="pug">
  .checkbox-component(:class="{ 'checkbox-disabled': disabled }")
    input(
      :id="id"
      type="checkbox"
      :indeterminate.prop="indeterminate"
      :checked="localChecked"
      :disabled="disabled"
      v-model="model"
      :value="val"
      :class="computedClass"
      @change="change")
    label.flex.a-center(:for="id")
      .box.flex.center(:class="{ 'margin': $slots.default }")
        iconCheck.check
      slot
</template>

<script>
import iconCheck from './icon'

export default {
  name: 'checkbox-component',
  components: {
    iconCheck
  },
  model: {
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: () => Math.random().toFixed(7).slice(2)
    },
    value: [String, Number, Boolean, Array],
    val: [String, Number, Boolean],
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      localChecked: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.localChecked = val
      }
    },
    computedClass () {
      let classList = ''
      if (this.indeterminate) {
        classList += 'indeterminate'
      }
      if (this.$options.propsData.checked !== undefined) {
        classList += ` ${this.checked ? 'checked' : 'non-checked'}`
      }
      return classList
    }
  },
  methods: {
    change () {
      this.$emit('change', this.localChecked)
    }
  }
}
</script>
