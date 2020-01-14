<template lang="pug">
  .range-section-component
    vSection(name="Range field" id="range")
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
            td.prop v-model
            td.type Object
            td.default (required)
            td.option
              div {from: {{min}}, to: {{max}}}
          tr
            td.prop step
            td.type Number
            td.default 1
            td.option
              input(v-model.number="step" type="number")
          tr
            td.prop min
            td.type Number
            td.default 0
            td.option
              input(v-model="min" type="number")
          tr
            td.prop max
            td.type Number
            td.default 100
            td.option
              input(v-model="max" type="number")
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="disabled")

      .dependencies
        span Dependencies:&nbsp;
        span vue-slider-component

      div
        span Events:
        .label change

      div(slot="demo")
        div(style="width: 350px;")
          commonRange(
            v-model="value"
            :disabled="disabled"
            :step="step"
            :min="min"
            :max="max"
            @change="log(`change: from ${$event.from} to ${$event.to}`)"
            @focus="log('focus')"
            @blur="log('blur')") {{ label }}
        br
        br
        br
        div value: {{ value }}
        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonRange from '@/components/common/range'

export default {
  name: 'range-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonRange
  },
  data () {
    return {
      label: 'Default field',
      step: 1,
      min: -2,
      max: 10,
      value: {
        from: 3,
        to: 7
      },
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .range-section-component {
    //
  }
</style>
