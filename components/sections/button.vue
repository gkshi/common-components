<template lang="pug">
  .section-button-component
    vSection(name="Buttons" id="button")
      table.docs(cellpadding="0" cellspacing="0")
        thead
          tr
            th.prop Prop
            th.type Type
            th.default Default
            th.option Option
        tbody
          tr
            td.prop type
            td.type String
            td.default default
            td.option
              select(v-model="button.type")
                option(v-for="type in buttonTypes" :value="type" :key="type") {{ type }}
          tr
            td.prop size
            td.type String
            td.default default
            td.option
              select(v-model="button.size")
                option(v-for="size in buttonSizes" :value="size" :key="size") {{ size }}
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="buttonDisabled")
      div
        span Events:
        .label click
        .label focus

      div(slot="demo")
        .flex.buttons
          commonButton(:type="button.type" :size="button.size" :disabled="buttonDisabled") Button
</template>

<script>
import vSection from '@/components/sections'
import commonButton from '@/components/common/button'

export default {
  name: 'section-button-component',
  components: {
    vSection,
    commonButton
  },
  data () {
    return {
      button: {
        type: 'default',
        size: 'default'
      },
      buttonTypes: ['default', 'alternative', 'light'],
      buttonSizes: ['default', 'small', 'large'],
      buttonDisabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-button-component {
    //
  }
</style>
