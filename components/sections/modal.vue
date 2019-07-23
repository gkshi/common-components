<template lang="pug">
  .modal-section-component
    vSection(name="Modals")
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

      .links(slot="demo")
        a(href="#" @click.prevent="openModal('modal1')") open modal 1
        a(href="#" @click.prevent="openModal('modal2')") open modal 2

    commonModal(id="modal1")
      div(v-if="title" slot="title") {{ title }}
      div
        div modal 1
        .links
          a(href="#" @click.prevent="openModal('modal2')") open modal 2
          a(href="#" @click.prevent="closeModal('modal1')") close

    commonModal(id="modal2")
      div modal 2
      div
        a(href="#" @click.prevent="closeModal('modal2')") close
</template>

<script>
import vSection from '@/components/sections'
import commonModal from '@/components/common/modal'

export default {
  name: 'modal-section-component',
  components: {
    vSection,
    commonModal
  },
  data () {
    return {
      title: 'Custom modal title'
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
