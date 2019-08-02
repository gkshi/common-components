<template lang="pug">
  .checkbox-component(:class="{ 'checkbox-disabled': disabled }")
    input(
      :id="localId"
      type="checkbox"
      :indeterminate.prop="indeterminate"
      :checked="checked"
      :disabled="disabled"
      v-model="model"
      :value="val"
      :class="computedClass"
      @change="change")
    label.flex.a-center(:for="localId")
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
    id: String,
    value: [String, Number, Boolean, Array],
    val: [String, Number, Boolean],
    indeterminate: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      localId: this.id,
      checked: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.checked = val
      }
    },
    computedClass () {
      let classList = ''
      if (this.indeterminate) {
        classList += 'indeterminate'
      }
      return classList
    }
  },
  methods: {
    change () {
      this.$emit('change', this.checked)
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
  }
}
</script>
