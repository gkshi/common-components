<template lang="pug">
  transition(name="modal")
    .modal-component(v-if="show" @click.self="close")
      dialog(:open="show")
        .title(v-if="$slots.title")
          slot(name="title")
        .content
          slot Modal default content
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'modal-component',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals
    }),
    show () {
      return this.modals.includes(this.id)
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeModal', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  $modal-background-wrapper: rgba(#000, 0.35);
  $transition-modal-wrapper: opacity 0.25s ease;
  $transition-modal: opacity 0.25s ease, transform 0.25s ease;
  .modal-component {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 40px 0;
    background: $modal-background-wrapper;
    transition: $transition-modal-wrapper;
    box-sizing: border-box;
    dialog {
      position: relative;
      width: 600px;
      max-width: 100%;
      max-height: 100%;
      transition: $transition-modal;
    }
    &.modal-enter {
      opacity: 0;
      dialog {
        opacity: 0;
        transform: scale(0.9);
      }
    }
    &.modal-leave-active {
      opacity: 0;
    }
  }
</style>
