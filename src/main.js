// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI, { Main } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false);
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
