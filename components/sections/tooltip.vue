<template lang="pug">
  .section-tooltip-component
    vSection(id="tooltip")
      h2(slot="title")
        span Tooltip
        small directive

      table.docs(cellpadding="0" cellspacing="0")
        thead
          tr
            th.prop Prop
            th.type Type
            th.default Default
            th.option Option
        tbody
          tr
            td.prop text
            td.type String
            td.default (required)
            td.option
              input(v-model="config.text")
          tr
            td.prop position
            td.type String
            td.default top
            td.option
              select(v-model="config.position")
                option(v-for="position in tooltipPositions" :value="position" :key="position") {{ position }}
          tr
            td.prop delay
            td.type Number
            td.default 400
            td.option
              input(v-model.number="config.delay")

      .dependencies
        span Dependencies:
        span &nbsp;-

      div
        span Events:
        span &nbsp;-

      div(slot="demo")
        .desc
          h3 Using examples
          div
            code div(v-tooltip="'text'") element
          div
            code div(v-tooltip="{ text: 'text', delay: false }") element

        .examples
          h3 Demo
          div
            span Try to hover&nbsp;
            a(href="#" @click.prevent v-tooltip="config") this link
            span &nbsp;to see the tooltip.
</template>

<script>
import vSection from '@/components/sections'
import commonButton from '@/components/common/button'

export default {
  name: 'section-tooltip-component',
  components: {
    vSection,
    commonButton
  },
  data () {
    return {
      config: {
        text: 'Tooltip text',
        position: 'top',
        delay: 400
      },
      tooltipPositions: ['top', 'bottom']
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-tooltip-component {
    .desc {
      margin-bottom: 20px;
    }
  }
</style>
