// Script para posibles interacciones en el sitio web

// Ejemplo de función para agregar un producto al carrito de compras
function agregarAlCarrito(productoId) {
    alert("Producto " + productoId + " agregado al carrito.");
}

// Asignar la función al botón de "Agregar al Carrito"
document.querySelectorAll('.btn-success').forEach(function(button) {
    button.addEventListener('click', function() {
        const productoId = this.parentElement.querySelector('h2').textContent;
        agregarAlCarrito(productoId);
    });
});

// modo oscuro
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}
