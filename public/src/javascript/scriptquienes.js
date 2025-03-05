window.addEventListener('load', () => {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    
    setTimeout(() => {
        leftDoor.style.transform = 'translateX(-100%)';
        rightDoor.style.transform = 'translateX(100%)';
    }, 500); // Espera medio segundo antes de empezar a abrir las puertas

    setTimeout(() => {
        document.body.classList.add('loaded');
        document.querySelectorAll('.hidden').forEach(el => el.classList.remove('hidden'));
    }, 2500); // Espera 2 segundos más para mostrar el contenido
});
