importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')


const config = {
  apiKey: "AIzaSyBl1x_7NdJFoQp2yS-WSBnRPgih8etkQJY",
  authDomain: "bukalelang-3d2a3.firebaseapp.com",
  databaseURL: "https://bukalelang-3d2a3.firebaseio.com",
  projectId: "bukalelang-3d2a3",
  storageBucket: "bukalelang-3d2a3.appspot.com",
  messagingSenderId: "373989807666"
};

firebase.initializeApp(config);

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload){
  return self.register.showNotification({},{});
})