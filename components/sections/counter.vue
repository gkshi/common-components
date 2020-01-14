<template lang="pug">
  .counter-section-component
    vSection(name="Counter field" id="counter")
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
            td.prop step
            td.type Number
            td.default 1
            td.option
              input(v-model.number="step" type="number")
          tr
            td.prop input-delay
            td.type Number
            td.default 500
            td.option
              input(v-model.number="delay" type="number")
          tr
            td.prop negative
            td.type Boolean
            td.default false
            td.option
              input(v-model="negative" type="checkbox")
          tr
            td.prop min
            td.type Number
            td.default -
            td.option
              input(v-model="min" type="number")
          tr
            td.prop max
            td.type Number
            td.default -
            td.option
              input(v-model="max" type="number")
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
        .label change
        .label focus
        .label blur

      div(slot="demo")
        commonCounter(
          v-model="value"
          :readonly="readonly"
          :disabled="disabled"
          :step="step"
          :input-delay="delay"
          :negative="negative"
          :min="min"
          :max="max"
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
import commonCounter from '@/components/common/counter'

export default {
  name: 'counter-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonCounter
  },
  data () {
    return {
      label: 'Default field',
      step: 1,
      delay: 500,
      negative: false,
      min: null,
      max: null,
      value: 0,
      type: 'text',
      readonly: false,
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .counter-section-component {
    //
  }
</style>
