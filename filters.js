import Vue from 'vue'
import moment from 'dayjs'
import 'moment/locale/zh-cn'

// const filters = {
//   formatDate: (val) => {
//     if (moment(val).isBefore(moment().subtract(7, 'days'))) {
//       return moment(val).format('YYYY-MM-DD')
//     } else {
//       return moment(val).from(moment())
//     }
//   },
//   formatTime: (val) => {
//     return moment(val).format('YYYY-MM-DD HH:mm:ss')
//   },
// }

// const filterList = Object.keys(filters).forEach((key) => {
//   return Vue.filter(key, filters[key])
// })

// console.log(filterList)

// export default filterList

const format = Vue.filter('formatDate', (val) => {
  if (moment(val).isBefore(moment().subtract(7, 'days'))) {
    return moment(val).format('YYYY-MM-DD')
  } else {
    return moment(val).from(moment())
  }
})
export default format
