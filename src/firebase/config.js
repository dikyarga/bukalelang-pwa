import Vue from 'vue';
import firebase from "firebase";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBl1x_7NdJFoQp2yS-WSBnRPgih8etkQJY",
  authDomain: "bukalelang-3d2a3.firebaseapp.com",
  databaseURL: "https://bukalelang-3d2a3.firebaseio.com",
  projectId: "bukalelang-3d2a3",
  storageBucket: "bukalelang-3d2a3.appspot.com",
  messagingSenderId: "373989807666"
};

export const app = firebase.initializeApp(config);
export const usersCollection = firebase.firestore().collection('users');
export const messagesCollection = firebase.firestore().collection('messages');
export const typingStatus = firebase.firestore().collection('typing-status');
export const likesCollection = firebase.firestore().collection('likes');
