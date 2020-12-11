import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'

const filters = {
  formatDate: (val) => {
    if (moment(val).isBefore(moment().subtract(7, 'days'))) {
      return moment(val).format('YYYY-MM-DD')
    } else {
      return moment(val).from(moment())
    }
  },
  formatTime: (val) => {
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  },
}

Object.keys(filters).forEach((key) => {
  return Vue.filter(key, filters[key])
})

export default filters
