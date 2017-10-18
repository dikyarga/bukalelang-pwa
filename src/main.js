// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'
// import 'firebase/firestore'
import * as firebase from './firebase/config'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import { store } from './store'
import push from './push'

Vue.config.productionTip = false
require('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate() {
    push()

    firebase.app.auth().onAuthStateChanged(user => {
      if (user) {
        // this.$store.commit('setUser', user)
        this.$store.dispatch('autoSignIn', user)
        // this.$store.dispatch('loadAuction')
      } else {
        this.$store.dispatch('errorLogin', user)
      }
    })
  }
})
