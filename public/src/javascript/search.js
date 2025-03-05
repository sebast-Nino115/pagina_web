document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = this.querySelector('input[name="query"]').value.toLowerCase().trim();
            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results';
            
            const pages = [
                { name: 'Contacto', url: '../html/contacto.html', keywords: 'contacto soporte ayuda' },
                { name: 'Cotización', url: '../html/cotizacion.html', keywords: 'cotización presupuesto' },
                { name: 'Reporte de Problema', url: '../html/reporte_problema.html', keywords: 'reporte problema falla' },
                { name: 'Componentes de Puertas', url: '../html/componentes.html', keywords: 'componentes puertas sensores' },
                { name: 'Software Predictivo', url: '../html/software_predictivo.html', keywords: 'software predictivo análisis datos' },
                { name: 'Servicios', url: '../html/servicios.html', keywords: 'servicios mantenimiento' },
                { name: 'Mantenimiento Preventivo', url: '../html/mantenimiento_preventivo.html', keywords: 'mantenimiento preventivo' },
                { name: 'Nosotros', url: '../html/quienes_somos.html', keywords: 'nosotros empresa equipo' },
                { name: 'Blog', url: '../html/blog.html', keywords: 'blog artículos noticias' }
            ];

            const results = pages.filter(page => 
                page.name.toLowerCase().includes(query) || page.keywords.toLowerCase().includes(query)
            );

            if (results.length > 0) {
                results.forEach(result => {
                    const resultLink = document.createElement('a');
                    resultLink.href = result.url;
                    resultLink.innerText = result.name;
                    resultsContainer.appendChild(resultLink);
                });
            } else {
                resultsContainer.innerHTML = `<p>No se encontraron resultados para: <strong>${query}</strong></p>`;
            }

            // Eliminar resultados anteriores, si existen
            const oldResults = document.querySelector('.search-results');
            if (oldResults) {
                oldResults.remove();
            }

            // Insertar resultados debajo del formulario
            this.insertAdjacentElement('afterend', resultsContainer);
        });
    } else {
        console.error('No se encontró el formulario de búsqueda');
    }
});
