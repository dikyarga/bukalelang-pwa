import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import * as firebase from '../firebase/config'


// import * as firebase from 'firebase'
// console.log('firebase : ', firebase.firestore);
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

let usersCollection = firebase.usersCollection

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions:{
        registerUser ({commit}, payload) {
            firebase.app.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
              console.log('all payload : ', payload);
              delete payload.password
              usersCollection.add(payload).then(user => {
                console.log('the user detail : ', user);
                router.push('/')

              }).catch(err => {
                console.log('error when register : ', err);
              })
            })
            .catch(err => console.log(err.message, 'registerError'))
        },
        loginUser ({commit}, payload) {
            firebase.app.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((user) => {
                    router.push('/')
                })
                .catch(err => console.log(err.message, 'loginError'))
        },
        autoSignIn ({commit}, payload) {
             commit('setUser', {id: payload.uid})
        },
        logout ({commit}, payload) {
            console.log('logout berhasil')
            firebase.app.auth().signOut()
                .then(() => {
                    router.push('/')
                })
            commit('setUser', null)
        },
    },
    getters: {
        user(state) {
            return state.user
        }
    }
})
