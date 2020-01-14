<template lang="pug">
  form.feedback-component(@submit.prevent="send")
    .row
      commonInput(
        v-model="data.name"
        :error="$v.data.name.$error") Name
    .row
      commonInput(
        v-model="data.email"
        :error="$v.data.email.$error") Email
    .row
      commonInput(
        v-model="data.phone"
        :error="$v.data.phone.$error") Phone
    .row
      commonTextarea(
        v-model="data.message"
        :error="$v.data.message.$error") Message
    .row
      commonFile(
        v-model="data.attach") Attach
    .row
      commonCheckbox(
        v-model="data.agreement"
        :error="$v.data.agreement.$error") I agree with rules
    .row
      commonButton(
        native="submit"
        :disabled="isLoading") Send
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, email, numeric, required } from 'vuelidate/lib/validators'
import commonInput from '../input'
import commonTextarea from '../textarea'
import commonFile from '../file'
import commonCheckbox from '../checkbox'
import commonButton from '../button'

export default {
  name: 'feedback-component',
  mixins: [validationMixin],
  components: {
    commonInput,
    commonTextarea,
    commonFile,
    commonCheckbox,
    commonButton
  },
  data () {
    return {
      isLoading: false,
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        attach: null,
        agreement: false
      }
    }
  },
  validations: {
    data: {
      name: {
        minLength: minLength(2)
      },
      email: {
        email
      },
      phone: {
        numeric,
        minLength: minLength(7)
      },
      message: {
        required
      },
      agreement: {
        required: e => e // checked state only
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (this.$v.$anyError) {
        this.$emit('error', this.$v.data)
        return
      }
      this.$v.$reset()
      this.$emit('submit', this.data)
      this.isLoading = true

      // TODO: replace it with your API request
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('ok')
          // reject('not ok')
        }, 2000)
      }).then(res => {
        this.$emit('success', res)
      }).catch(err => {
        this.$emit('error', err)
      }).then(() => {
        // Не забудьте добавить отключение загрузки isLoading в конце
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .feedback-component {
    .row {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
</style>
