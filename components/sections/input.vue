<template lang="pug">
  .input-section-component
    vSection(name="Input fields" id="input")
      table.docs(cellpadding="0" cellspacing="0")
        thead
          tr
            th.prop Prop
            th.type Type
            th.default Default
            th.option Option
        tbody
          tr
            td.prop id
            td.type String
            td.default (random)
            td.option -
          tr
            td.prop label
            td.type Slot
            td.default -
            td.option
              input(v-model="label")
          tr
            td.prop type
            td.type String
            td.default text
            td.option
              select(v-model="type")
                option(value="text" selected) text
                option(value="number") number
                option(value="date") date
          tr
            td.prop readonly
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="readonly")
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="disabled")
      div
        span Events:
        .label input
        .label change
        .label focus
        .label blur

      div(slot="demo")
        commonInput(
          :type="type"
          v-model="value"
          :readonly="readonly"
          :disabled="disabled") {{ label }}
</template>

<script>
import vSection from '@/components/sections'
import commonInput from '@/components/common/input'

export default {
  name: 'input-section-component',
  components: {
    vSection,
    commonInput
  },
  data () {
    return {
      label: 'Default field',
      value: '',
      type: 'text',
      readonly: false,
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-section-component {
    //
  }
</style>
