document.addEventListener('DOMContentLoaded', function() {
    const transitionOverlay = document.querySelector('.transition-overlay');

    document.body.classList.add('cursor-light');

    if (transitionOverlay) {
        setTimeout(() => {
            transitionOverlay.classList.add('hidden');
            document.body.classList.remove('cursor-light');
        }, 3000); // Duración de la animación de transición (3 segundos)
    } else {
        console.error('Transition overlay element not found.');
    }
});
