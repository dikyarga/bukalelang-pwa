// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import { store } from './store'
import push from './push'



Vue.config.productionTip = false
require('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    const config = {
      apiKey: "AIzaSyBl1x_7NdJFoQp2yS-WSBnRPgih8etkQJY",
      authDomain: "bukalelang-3d2a3.firebaseapp.com",
      databaseURL: "https://bukalelang-3d2a3.firebaseio.com",
      projectId: "bukalelang-3d2a3",
      storageBucket: "bukalelang-3d2a3.appspot.com",
      messagingSenderId: "373989807666"
    };
    firebase.initializeApp(config)
    push()
   
    firebase.auth().onAuthStateChanged(user => {
      console.log('first ?', user)
      if (user) {
        // this.$store.commit('setUser', user)
        this.$store.dispatch('autoSignIn', user)
        // this.$store.dispatch('loadAuction')
      } else {
        this.$store.dispatch('errorLogin')
      }
    })
  }
})
