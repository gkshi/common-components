<template lang="pug">
  .textarea-section-component
    vSection(name="Textarea fields")
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
        .label textarea
        .label change
        .label focus
        .label blur

      div(slot="demo")
        commonTextarea(
          v-model="value"
          :readonly="readonly"
          :disabled="disabled") {{ label }}
</template>

<script>
import vSection from '@/components/sections'
import commonTextarea from '@/components/common/textarea'

export default {
  name: 'textarea-section-component',
  components: {
    vSection,
    commonTextarea
  },
  data () {
    return {
      label: 'Default textarea',
      value: '',
      type: 'text',
      readonly: false,
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea-section-component {
    //
  }
</style>
