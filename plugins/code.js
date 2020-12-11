import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import uuid from 'uuid/v4'

const code = {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      codeInfo: {},
      code: '',
      sid: '',
    }
  },
  mounted() {
    this.sid = localStorage.getItem('sid')
      ? localStorage.getItem('sid')
      : uuid()
    localStorage.setItem('sid', this.sid)
    this._getCode()
  },
  methods: {
    _getCode() {
      this.$axios.$get('/public/getcode?sid=' + this.sid).then((res) => {
        if (res.code === 10000) {
          this.codeInfo = res.data
        }
      })
    },
  },
}

Vue.mixin(code)

export default code
