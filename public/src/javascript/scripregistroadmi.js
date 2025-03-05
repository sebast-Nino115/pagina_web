// scripregistroadmi.js

// Función para registrar usuario
function register() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  if (email && password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Registro exitoso');
        // Opcional: limpiar formulario o redirigir
      })
      .catch(error => {
        alert(error.message);
      });
  } else {
    alert('Por favor ingrese un correo y una contraseña');
  }
}

// Función para iniciar sesión
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        alert('Inicio de sesión exitoso');
        // Redirige a prueba1admin.html tras iniciar sesión
        window.location.href = 'prueba1admin.html';
      })
      .catch(error => {
        alert(error.message);
      });
  } else {
    alert('Por favor ingrese un correo y una contraseña');
  }
}

// Función para cerrar sesión
function logout() {
  auth.signOut()
    .then(() => {
      alert('Sesión cerrada');
      // Redirige a prueba1admin.html tras cerrar sesión
      window.location.href = 'prueba1admi.html';
    })
    .catch(error => {
      alert(error.message);
    });
}

// Opcional: Monitoreo del estado de autenticación
auth.onAuthStateChanged((user) => {
  const currentPage = window.location.pathname;
  // Si estamos en administradorcode.html y no hay usuario autenticado, redirige a prueba1admin.html
  if (currentPage.includes('administradorcode.html') && !user) {
    window.location.href = 'prueba1admi.html';
  }
});
