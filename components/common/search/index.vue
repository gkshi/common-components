<template lang="pug">
  .search-component(v-outside="reset")
    commonInput(
      ref="input"
      v-model="query"
      :placeholder="placeholder"
      @focus="onFocus"
      @input="search")
    transition
      .dropdown(v-if="isOpened")
        commonLoader(v-if="isLoading")
        template(v-else)
          div(v-for="(item, i) in response" :key="i") item &#35;{{ i }}
          div(v-if="!response.length") No items
</template>

<script>
export default {
  name: 'search-component',
  props: {
    action: {
      type: String,
      default: 'api/search'
    },
    placeholder: {
      type: String,
      default: 'Search...'
    },
    delay: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      isOpened: false,
      isLoading: false,
      query: '',
      timeout: null,
      response: []
    }
  },
  watch: {
    '$route' () {
      this.query = ''
      this.reset()
    }
  },
  methods: {
    search () {
      if (!this.query) {
        this.reset()
        return
      }
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.sendRequest()
      }, this.delay)
    },
    async sendRequest () {
      if (this.isLoading) {
        return
      }
      this.isOpened = true
      this.isLoading = true
      this.response = await this.$store.dispatch(this.action, this.query)
      this.isLoading = false
    },
    reset () {
      clearTimeout(this.timeout)
      this.isOpened = false
      this.isLoading = false
      if (!this.response.length) {
        this.query = ''
      }
      // Object.assign(this.$data, this.$options.data())
    },
    select () {
      this.$refs.input.select()
    },
    onFocus () {
      if (this.query) {
        this.isOpened = true
        this.sendRequest()
        this.select()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-component {
    // Your custom styles here
  }
</style>
