<template lang="pug">
  .textarea-section-component
    vSection(name="Form" id="form")
      table.docs(cellpadding="0" cellspacing="0")
        thead
          tr
            th.prop Prop
            th.type Type
            th.default Default
            th.option Option
        tbody
          tr
            td.prop -
            td.type -
            td.default -
            td.option -

      .dependencies
        span Dependencies:
        .label input
        .label textarea
        .label file
        .label checkbox
        .label button

      div
        span Events:
        .label submit
        .label success
        .label error

      div(slot="demo")
        commonForm(
          @submit="onSubmit"
          @success="onSuccess"
          @error="onError")

        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonForm from '@/components/common/form'

export default {
  name: 'textarea-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonForm
  },
  data () {
    return {
      fields: []
    }
  },
  methods: {
    onSubmit () {
      this.log('form submit event')
    },
    onSuccess () {
      this.log('form success event')
    },
    onError () {
      this.log('form error event')
    }
  }
}
</script>

<style lang="scss" scoped>
  .textarea-section-component {
    //
  }
</style>
