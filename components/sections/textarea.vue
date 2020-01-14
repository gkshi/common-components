<template lang="pug">
  .textarea-section-component
    vSection(name="Textarea" id="textarea")
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
            td.prop error
            td.type String, Boolean
            td.default -
            td.option
              input(type="checkbox" v-model="error")
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

      .dependencies
        span Dependencies:
        span &nbsp;-

      div
        span Events:
        .label input
        .label change
        .label focus
        .label blur

      div(slot="demo")
        commonTextarea(
          v-model="value"
          :readonly="readonly"
          :disabled="disabled"
          :error="error"
          @input="log(`input ${$event}`)"
          @change="log(`change ${$event}`)"
          @focus="log('focus')"
          @blur="log('blur')") {{ label }}
        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonTextarea from '@/components/common/textarea'

export default {
  name: 'textarea-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonTextarea
  },
  data () {
    return {
      label: 'Default textarea',
      value: '',
      error: false,
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
