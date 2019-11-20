import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import DateFilter from '@/filters/date.filter'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  options: {
    emoji: true
  }
})

Vue.use(Element, { locale })

const moment = require('moment')
require('moment/locale/ru')

Vue.use(require('vue-moment'), {
  moment
})

console.log(Vue.moment().locale()) //es

Vue.filter('date', DateFilter)
