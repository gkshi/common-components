<template lang="pug">
  .checkbox-section-component
    vSection(name="Checkbox" id="checkbox")
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
            td.type String, Array
            td.default -
            td.option -
          tr
            td.prop value
            td.type String, Number
            td.default -
            td.option for checkbox groups
          tr
            td.prop indeterminate
            td.type Boolean
            td.default false
            td.option
              input(v-model="config.indeterminate" type="checkbox")
          tr
            td.prop error
            td.type String, Boolean
            td.default -
            td.option
              input(v-model="config.error" type="checkbox")
          tr
            td.prop checked
            td.type Boolean
            td.default false
            td.option
              input(v-model="config.checked" type="checkbox")
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(v-model="config.disabled" type="checkbox")

      .dependencies
        span Dependencies:
        span &nbsp;-

      div
        span Events:
        .label change

      .examples(slot="demo")
        div
          commonCheckbox(
            v-model="config.value"
            :indeterminate="config.indeterminate"
            :checked="config.checked"
            :error="config.error"
            :disabled="config.disabled"
            @change="log(`change ${$event}`)") {{ label }}
        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")

        .group
          div Checkbox group, selected: {{ selected }}
          .list.flex
            commonCheckbox(
              v-for="item in checkboxes"
              v-model="selected"
              :key="item"
              :disabled="item === 'item4'"
              :value="item") {{ item }}

        .group
          div Code:
          div(v-pre)
            code div selected: {{ selected }}
          div
            code commonCheckbox(v-model="selected" :value="item1")
          div
            code commonCheckbox(v-model="selected" :value="item2")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonCheckbox from '@/components/common/checkbox'

export default {
  name: 'checkbox-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonCheckbox
  },
  data () {
    return {
      config: {
        value: false,
        indeterminate: false,
        checked: false,
        disabled: false,
        error: false
      },
      selected: [],
      checkboxes: ['item1', 'item2', 'item3', 'item4', 'item5'],
      label: 'Single checkbox'
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkbox-section-component {
    .group {
      margin-top: 48px;
      .list {
        margin-top: 8px;
        & > * {
          margin-right: 20px;
        }
      }
    }
  }
</style>
