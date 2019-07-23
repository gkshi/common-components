<template lang="pug">
  .section-component.flex
    .left
      slot(v-if="$slots.title" name="title")
      h2(v-else) {{ name }}
      slot
    .right
      h2 Demo
      slot(name="demo")
</template>

<script>
export default {
  name: 'section-component',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
  .section-component {
    .left {
      //
    }
    .right {
      margin-left: 100px;
      h2 {
        opacity: .2;
        margin-bottom: 30px !important;
      }
    }
  }
</style>
