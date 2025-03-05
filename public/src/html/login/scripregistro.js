// scripregistro.js

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
      alert('Por favor ingrese un correo y contraseña');
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
          // Redirigir a la página principal
          window.location.href = '../../../index.html';
        })
        .catch(error => {
          alert(error.message);
        });
    } else {
      alert('Por favor ingrese un correo y contraseña');
    }
  }
  
  // Función para cerrar sesión
  function logout() {
    auth.signOut()
      .then(() => {
        alert('Sesión cerrada');
        window.location.href = '/index.html';
      })
      .catch(error => {
        alert(error.message);
      });
  }
  
  // Actualizar la interfaz según el estado de autenticación
  auth.onAuthStateChanged((user) => {
    const currentPage = window.location.pathname;
  
    // Si estamos en la página de login (registrogeneral.html)
    if (currentPage.includes('registrogeneral.html')) {
      if (user) {
        // Redirigir a la página principal si ya está autenticado
        window.location.href = '/index.html';
      }
    }
    // Si estamos en la página principal (index.html o raíz)
    else if (currentPage.includes('index.html') || currentPage === "/") {
      if (user) {
        // Mostrar el botón de Cerrar sesión y ocultar el de Login
        document.getElementById('logout-link').style.display = 'block';
        document.getElementById('login-link').style.display = 'none';
      } else {
        // Mostrar el botón de Login y ocultar el de Cerrar sesión
        document.getElementById('logout-link').style.display = 'none';
        document.getElementById('login-link').style.display = 'block';
      }
    }
  });
  