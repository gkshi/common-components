<template lang="pug">
  .input-section-component
    vSection(name="File field" id="file")
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
            td.prop accept
            td.type String
            td.default *
            td.option
              input(v-model="accept")
          tr
            td.prop multiple
            td.type Boolean
            td.default false
            td.option
              input(v-model="multiple" type="checkbox")
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="disabled")
          tr
            td.prop required
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="required")

      .dependencies
        span Dependencies:&nbsp;
        span button

      div
        span Events:
        .label change
        .label focus
        .label blur

      div(slot="demo")
        div value: {{ value || 'null' }}
        div
          a(href="#" @click.prevent="reset") reset
        br
        commonFile(
          v-model="value"
          :disabled="disabled"
          :accept="accept"
          :required="required"
          :multiple="multiple"
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
import commonFile from '@/components/common/file'

export default {
  name: 'input-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonFile
  },
  data () {
    return {
      label: 'File field label',
      value: null,
      value2: null,
      accept: '*',
      type: 'text',
      multiple: false,
      disabled: false,
      required: false
    }
  },
  methods: {
    reset () {
      this.value = null
      this.value2 = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-section-component {
    //
  }
</style>
