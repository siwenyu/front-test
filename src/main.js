// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// global.jQuery = jQuery;

// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(editormd);
// Vue.use(jQuery);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, n) {
      state.count += (n || 1);
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
let vueObj = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
