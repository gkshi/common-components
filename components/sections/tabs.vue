<template lang="pug">
  .textarea-section-component
    vSection(name="Tabs" id="tabs")
      table.docs(cellpadding="0" cellspacing="0")
        thead
          tr
            th.prop Prop
            th.type Type
            th.default Default
            th.option Option
        tbody
          tr
            td.prop tabs
            td.type Array
            td.default (required)
            td.option -
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

      div(slot="demo")
        commonTabs(:tabs="tabs" :disabled="disabled")
          div(data-tab="tab1") tab 1 content
          div(data-tab="tab2") tab 2 content
          div(data-tab="tab3") tab 3 content
          div(data-tab="tab4") tab 4 content

        .tab-code
          div Tab data example
          pre
            code {{ tabExample }}
</template>

<script>
import vSection from '@/components/sections'
import commonTabs from '@/components/common/tabs'

export default {
  name: 'textarea-section-component',
  components: {
    vSection,
    commonTabs
  },
  data () {
    return {
      tabs: [
        {
          id: 'tab1',
          label: 'Tab 1',
          disabled: false
        },
        {
          id: 'tab2',
          label: 'Tab 2',
          active: true
        },
        {
          id: 'tab3',
          label: 'Tab 3',
          disabled: true
        },
        {
          id: 'tab4',
          label: 'Tab 4'
        }
      ],
      tabExample: {
        id: 'tab_id',
        label: 'Tab label',
        active: true,
        disabled: false
      },
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea-section-component {
    .tab-code {
      margin-top: 50px;
    }
  }
</style>
