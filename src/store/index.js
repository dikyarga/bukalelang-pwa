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

// const messaging = firebase.messaging()


Vue.use(Vuex)

const API_DOMAIN = 'https://us-central1-blmockup.cloudfunctions.net/getUserAuctions'
const GET_USER_AUCTION = `${API_DOMAIN}/getUserAuctions`

export const store = new Vuex.Store({
    state: {
        user: null,
        userAuctions: []
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setUserAuctions (state, payload) {
            console.log(payload, 'payload user actions')
            state.userAuctions = payload
        }
    },
    actions:{
        registerUser ({commit}, payload) {
            firebase.app.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
              console.log('all payload : ', payload);
              delete payload.password
              usersCollection.add(payload).then(user => {
                commit('setUser', {id: payload.uid})
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
        getUserAuction ({commit, state}, payload) {
            const query = '?userId=ego'//+state.user.id
            Vue.axios.get(GET_USER_AUCTION+query)
                .then((response) => {
                    commit('setUserAuctions', response.data)
                })
                .catch(err => console.log(err.message, 'getUserAuctionsError'))
        },
        createUserAuction ({commit, state}, payload) {
            console.log('ketrigger')
            const URL = 'https://us-central1-bukalelang-3d2a3.cloudfunctions.net/newUserAuctions'
            Vue.axios.post(URL, {
                userId: state.user.id,
                ...payload.auctionData
            })
            .then((response) => {
                console.log(response, 'response buka lelang')
                // commit('setUserAuctions', response.data)
            })
            .catch(err => console.log(err.message, 'getUserAuctionsError'))
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        userAuctions(state) {
            return state.userAuctions
        }
    }
})
