// firebase-config.js

const firebaseConfig = {
    apiKey: "AIzaSyD-oLjrUsGkYvgzptasrMy9VnVqe1qPIko",
    authDomain: "newprax-376e1.firebaseapp.com",
    projectId: "newprax-376e1",
    storageBucket: "newprax-376e1.firebasestorage.app",
    messagingSenderId: "541017909565",
    appId: "1:541017909565:web:aa6b5f47ffb6c653547d54",
    measurementId: "G-J0JYX93Y4G"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Opcional: para pruebas, configurar persistencia en sesión
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      console.log('Persistencia configurada a SESSION');
    })
    .catch((error) => {
      console.error('Error al configurar la persistencia:', error);
    });
  