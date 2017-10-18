import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'

import * as firebase from 'firebase'

// const messaging = firebase.messaging()

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
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
                router.push('/')
            })
            .catch(err => console.log(err.message, 'registerError'))
        },
        loginUser ({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
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
            firebase.auth().signOut()
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