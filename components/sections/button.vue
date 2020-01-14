<template lang="pug">
  .section-button-component
    vSection(name="Button" id="button")
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
            td.prop href
            td.type String
            td.default -
            td.option for "a" tag
          tr
            td.prop target
            td.type String
            td.default _blank
            td.option for "a" tag
          tr
            td.prop to
            td.type String
            td.default -
            td.option for "nuxt-link" tag
          tr
            td.prop native
            td.type String
            td.default submit
            td.option for "button" tag
          tr
            td.prop disabled
            td.type Boolean
            td.default false
            td.option
              input(type="checkbox" v-model="buttonDisabled")

      .dependencies
        span Dependencies:
        span &nbsp;-

      div
        span Events:
        .label click
        .label focus
        .label blur

      div(slot="demo")
        .flex.buttons
          div
            div(style="margin-bottom: 5px;") a
            commonButton(
              href="#"
              :type="button.type"
              :size="button.size"
              :disabled="buttonDisabled"
              @focus="log('focus')"
              @blur="log('blur')"
              @click="log('click')") Button
          br
          div
            div(style="margin-bottom: 5px;") nuxt-link
            commonButton(
              to="/"
              :type="button.type"
              :size="button.size"
              :disabled="buttonDisabled"
              @focus="log('focus')"
              @blur="log('blur')"
              @click="log('click')") Button
          br
          div
            div(style="margin-bottom: 5px;") button
            commonButton(
              :type="button.type"
              :size="button.size"
              :disabled="buttonDisabled"
              @focus="log('focus')"
              @blur="log('blur')"
              @click="log('click')") Button
        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonButton from '@/components/common/button'

export default {
  name: 'section-button-component',
  mixins: [mixinLog],
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
