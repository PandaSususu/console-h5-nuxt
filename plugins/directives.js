import Vue from 'vue'

import { escapeHtml } from '~/utils/escapeHtml'

const directives = {
  casehtml: {
    bind: (el, binding) => {
      el.innerHTML = escapeHtml(binding.value)
    },
    componentUpdated: (el, binding) => {
      el.innerHTML = escapeHtml(binding.value)
    },
  },
}

Object.keys(directives).forEach((key) => {
  return Vue.directive(key, directives[key])
})

export default directives
