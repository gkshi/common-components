export default {
  data () {
    return {
      logs: ''
    }
  },
  methods: {
    log (log) {
      this.logs += `\n ${log}`
      this.$nextTick(() => {
        if (this.$refs.logs.selectionStart === this.$refs.logs.selectionEnd) {
          this.$refs.logs.scrollTop = this.$refs.logs.scrollHeight
        }
      })
    }
  }
}
