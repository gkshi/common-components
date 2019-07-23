<template lang="pug">
  .checkbox-section-component
    vSection(name="Checkboxes")
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
            td.prop value
            td.type String, Number, Boolean, Array
            td.default -
            td.option for checkbox groups
          tr
            td.prop val
            td.type String, Number, Boolean
            td.default -
            td.option for checkbox groups
          tr
            td.prop indeterminate
            td.type Boolean
            td.default false
            td.option
              input(v-model="config.indeterminate" type="checkbox")
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

      .examples(slot="demo")
        div
          template(v-if="config.checked")
            commonCheckbox(
              :indeterminate="config.indeterminate"
              :checked="true"
              :disabled="config.disabled"
              :key="1") {{ label }}
          template(v-else)
            commonCheckbox(
              :indeterminate="config.indeterminate"
              :disabled="config.disabled"
              :key="2") {{ label }}
        .group
          div Checkbox group, selected: {{ selected }}
          .list.flex
            commonCheckbox(
              v-for="item in checkboxes"
              v-model="selected"
              :key="item"
              :val="item") {{ item }}
        .group
          div Code:
          div(v-pre)
            code div selected: {{ selected }}
          div
            code commonCheckbox(v-model="selected" :val="item1")
          div
            code commonCheckbox(v-model="selected" :val="item2")
</template>

<script>
import vSection from '@/components/sections'
import commonCheckbox from '@/components/common/checkbox'

export default {
  name: 'checkbox-section-component',
  components: {
    vSection,
    commonCheckbox
  },
  data () {
    return {
      config: {
        indeterminate: false,
        checked: false,
        disabled: false
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
      margin-top: 24px;
      .list {
        margin-top: 8px;
        & > * {
          margin-right: 20px;
        }
      }
    }
  }
</style>
