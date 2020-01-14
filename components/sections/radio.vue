<template lang="pug">
  .checkbox-section-component
    vSection(name="Radio" id="radio")
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
            td.prop v-model
            td.type String, Number
            td.default -
            td.option -
          tr
            td.prop val
            td.type String, Number
            td.default -
            td.option -
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
        .group
          div
            span chosen product type:&nbsp;
            strong {{ chosen }}
          .list.flex
            commonRadio(
              v-for="item in options"
              v-model="chosen"
              name="group1"
              :key="item.value"
              :val="item.value"
              :checked="item.value === 'mebel'"
              :disabled="config.disabled"
              @change="onChange") {{ item.label }}
        .group
          div Code:
          div
            code commonRadio(v-model="chosen" :val="item1" name="producttype")
          div
            code commonRadio(v-model="chosen" :val="item2" name="producttype")

        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonRadio from '@/components/common/radio'

export default {
  name: 'checkbox-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonRadio
  },
  data () {
    return {
      config: {
        checked: false,
        disabled: false
      },
      options: [
        {
          label: 'Электроника',
          value: 'elektronika'
        },
        {
          label: 'Мебель',
          value: 'mebel'
        },
        {
          label: 'Бытовая техника',
          value: 'tehnika'
        },
        {
          label: 'Товары для дачи',
          value: 'dacha'
        }
      ],
      chosen: 'mebel'
    }
  },
  methods: {
    onChange (e) {
      this.log(`change event: ${e}`)
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
