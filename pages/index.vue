<template lang="pug">
  .page.index
    a.github(href="https://github.com/gkshi/common-components" target="_blank") github repo
    h1
      span Common components
      i 💄
    .description There are common Dev UI components for your Vue/Nuxt project.
    .anchors
      a(href="#button") button
      a(href="#tooltip") tooltip
      a(href="#input") input
      a(href="#input") textarea
      a(href="#checkbox") checkbox
      a(href="#modal") modal

    div
      span

    sectionButton.section
    sectionTooltip.section
    sectionInput.section
    sectionTextarea.section
    sectionCheckbox.section
    sectionModal.section
</template>

<script>
import sectionButton from '@/components/sections/button'
import sectionTooltip from '@/components/sections/tooltip'
import sectionInput from '@/components/sections/input'
import sectionTextarea from '@/components/sections/textarea'
import sectionCheckbox from '@/components/sections/checkbox'
import sectionModal from '@/components/sections/modal'

export default {
  components: {
    sectionButton,
    sectionTooltip,
    sectionInput,
    sectionTextarea,
    sectionCheckbox,
    sectionModal
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  .page.index {
    margin-bottom: 80px;
    .buttons {
      & > * {
        margin-right: 10px;
      }
    }
  }
</style>

<style lang="scss">
  .page.index {
    h1 {
      i {
        font-style: normal;
        font-size: 1.3em;
        display: inline-flex;
        margin-left: 20px;
      }
    }
    .description {
      margin-top: 20px;
    }
    .section {
      &:not(:first-child) {
        margin-top: 120px;
      }
      h2 {
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 14px;
      }
    }
    .docs {
      margin-bottom: 30px;
      thead {
        th {
          padding: 8px 10px 8px;
        }
      }
      tbody {
        tr {
          &:nth-child(2n + 1) {
            background: #f2f2f2;
          }
        }
        td {
          padding: 8px 10px 10px;
        }
      }
    }
    .prop {
      width: 140px;
      text-align: left;
    }
    .type {
      width: 140px;
      text-align: left;
    }
    td.type {
      color: #D12853;
    }
    .default {
      width: 140px;
      text-align: left;
    }
    .option {
      width: 200px;
      text-align: left;
    }

    .anchors {
      margin-top: 10px;
      & > * {
        display: inline-flex;
        margin-right: 10px;
      }
    }

    .github {
      display: inline-block;
      margin: 0 0 20px;
    }
  }
</style>
