<template lang="pug">
  .modal-section-component
    vSection(name="Modal" id="modal")
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
            td.default (required)
            td.option -
          tr
            td.prop title
            td.type Slot
            td.default -
            td.option
              input(v-model="title")

      .dependencies
        span Dependencies:
        .label vuex
        .label v-outside
        .label mixin

      div
        span Events:
        .label open
        .label close

      div(slot="demo")
        .links
          a(href="#" @click.prevent="openModal('modal1')") open modal 1
          a(href="#" @click.prevent="openModal('modal2')") open modal 2
        .logs
          div Logs:
          textarea(ref="logs" v-model="logs")

    commonModal(
      id="modal1"
      @open="log(`modal 1 opened`)"
      @close="log(`modal 1 closed`)")
      div(v-if="title" slot="title") {{ title }}
      div
        div(style="margin: 40px 0 60px;")
          commonTabs(:tabs="tabs")
            div(data-tab="0") tab 1 content
            div(data-tab="1") tab 2 content
            div(data-tab="2") tab 3 content
            div(data-tab="3") tab 4 content
        .links
          a(href="#" @click.prevent="openModal('modal2')") open modal 2
          a(href="#" @click.prevent="closeModal('modal1')") close

    commonModal(
      id="modal2"
      @open="log(`modal 2 opened`)"
      @close="log(`modal 2 closed`)")
      div modal 2
      div
        a(href="#" @click.prevent="closeModal('modal2')") close
</template>

<script>
import mixinLog from '@/mixins/log'
import vSection from '@/components/sections'
import commonModal from '@/components/common/modal'
import commonTabs from '@/components/common/tabs'

export default {
  name: 'modal-section-component',
  mixins: [mixinLog],
  components: {
    vSection,
    commonModal,
    commonTabs
  },
  data () {
    return {
      title: 'Custom modal title',
      tabs: [
        {
          id: '0',
          label: 'Tab 1',
          disabled: false
        },
        {
          id: '1',
          label: 'Tab 2',
          active: true
        },
        {
          id: '2',
          label: 'Tab 3',
          disabled: true
        },
        {
          id: '3',
          label: 'Tab 4'
        }
      ]
    }
  },
  methods: {
    openModal (id) {
      this.$store.dispatch('openModal', id)
    },
    closeModal (id) {
      this.$store.dispatch('closeModal', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-section-component {
    .links {
      & > * {
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
</style>
