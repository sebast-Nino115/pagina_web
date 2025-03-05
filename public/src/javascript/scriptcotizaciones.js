document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Validación de campos
        const email = document.querySelector('#email').value.trim();
        const nombre = document.querySelector('#nombre').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();
        const ciudad = document.querySelector('#ciudad').value.trim();
        const cantidadPuertas = document.querySelector('#cantidad-puertas').value.trim();

        if (!email || !nombre || !telefono || !empresa || !ciudad || !cantidadPuertas) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Enviar el formulario si todos los campos son válidos
        form.submit();
    });
});
