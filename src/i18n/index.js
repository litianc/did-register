import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh_CN',
  fallbackLocale: 'zh_CN',
  messages: messages
})
