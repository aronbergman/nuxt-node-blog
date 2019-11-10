import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import DateFilter from '@/filters/date.filter'

Vue.use(Element, { locale })
Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DateFilter)
