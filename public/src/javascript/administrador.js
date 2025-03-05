// Configuración de Firebase
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

function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Registro exitoso');
        })
        .catch(error => {
            alert(error.message);
        });
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('Inicio de sesión exitoso');
            window.location.href = "https://newprax-376e1.web.app/index.html"; // Redirige al usuario normal
        })
        .catch(error => {
            alert(error.message);
        });
}

function adminLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            
            // Verifica si el correo pertenece a un administrador
            if (user.email === "admin@example.com") {  
                alert('Inicio de sesión como Administrador exitoso');
                window.location.href = "https://newprax-376e1.web.app/admin.html"; // Redirige al panel de administrador
            } else {
                alert('No tienes permisos de administrador');
            }
        })
        .catch(error => {
            alert(error.message);
        });
}

function logout() {
    auth.signOut().then(() => {
        alert('Sesión cerrada');
        window.location.href = "https://newprax-376e1.web.app/login.html"; // Redirige tras logout
    }).catch(error => {
        alert(error.message);
    });
}
