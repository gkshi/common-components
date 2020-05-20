<template lang="pug">
  .input-file-component(:class="{ disabled }" @click="$emit('click', $event)")
    label(v-if="$slots.default")
      slot
    .button.inline-flex
      input(
        ref="input"
        type="file"
        :id="localId"
        :name="name"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        :required="required"
        tabindex="-1"
        @change="change")
      commonButton(
        ref="button"
        :disabled="disabled"
        @click="click"
        @focus="$emit('focus')"
        @blur="$emit('blur')")
        iconAttachment
        span(v-if="filesCount") Файл выбран ({{ filesCount }})
        span(v-else) Выбрать файл
</template>

<script>
import iconAttachment from './icon'
import commonButton from '@/components/common/button'

export default {
  name: 'input-file-component',
  components: {
    commonButton,
    iconAttachment
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    id: String,

    // Значение атрибута "name" у поля
    name: String,

    // Значение поля (объект, файл или список файлов)
    value: {
      validator: value => {
        return typeof value === 'object' || value instanceof File || value instanceof FileList
      },
      default: () => {}
    },

    // Разрешенные типы файлов (MIME формат) (image/*, application/pdf, text/plain и другие)
    accept: {
      type: String,
      default: '*'
    },
    multiple: Boolean,
    disabled: Boolean,
    required: Boolean
  },
  data () {
    return {
      localId: this.id,
      originalValue: this.value
    }
  },
  computed: {
    filesCount () {
      if (this.multiple) {
        return this.value ? this.value.length : 0
      }
      return this.value ? 1 : 0
    }
  },
  watch: {
    value () {
      if (!this.value) {
        this.change(null)
      }
    }
  },
  mounted () {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    this.$refs.input.addEventListener('change', this.sync)
  },
  beforeDestroy () {
    this.$refs.input.removeEventListener('change', this.sync)
  },
  methods: {
    click () {
      this.$refs.input.click()
    },
    change (e) {
      if (!e) {
        this.$emit('change', e)
        this.sync()
        return
      }
      const val = e ? this.multiple ? e.target.files : e.target.files[0] : null
      if ((this.multiple && val.length) || (!this.multiple && val)) {
        this.originalValue = e.target.files
        this.$emit('change', val)
      }
    },
    sync (e) {
      this.$refs.input.files = this.originalValue
      if (!e) {
        this.$refs.input.value = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-file-component {
    // Your custom styles here
  }
</style>
