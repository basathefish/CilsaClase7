document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    // Obtener los valores de los campos y eliminar espacios
    const fields = {
        nombre: document.getElementById('nombre'),
        email: document.getElementById('email'),
        asunto: document.getElementById('asunto'),
        mensaje: document.getElementById('mensaje')
    };

    const values = {
        nombre: fields.nombre.value.trim(),
        email: fields.email.value.trim(),
        asunto: fields.asunto.value.trim(),
        mensaje: fields.mensaje.value.trim()
    };

    // Validación de campos vacíos
    for (const [key, value] of Object.entries(values)) {
        if (!value) {
            alert(`Por favor, ingresa ${key}.`);
            fields[key].focus();
            return;
        }
    }

    // Validación del formato del email
    if (!validateEmail(values.email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        fields.email.focus();
        return;
    }

    // Validación de que el nombre no incluya números
    if (!validateName(values.nombre)) {
        alert('El nombre no puede contener números ni caracteres especiales.');
        fields.nombre.focus();
        return;
    }

    alert('Formulario enviado correctamente.');

    // Limpiar el formulario
 document.querySelector('form').reset(); // Resetea todos los campos del formulario
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Función para validar que el nombre solo contenga letras y espacios
function validateName(name) {
    const re = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Expresión regular para letras (incluye acentos y ñ)
    return re.test(String(name).trim());
}
