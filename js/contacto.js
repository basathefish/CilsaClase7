document.querySelector('form').addEventListener('submit', function (event) {
    // event.preventDefault(); 
    let isValid = true;
    
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
            mostrarError('${key}', `Por favor, ingresa un ${key}.`);
        }
    }

    // Validación del formato del email
    if (!validateEmail(values.email)) {
        isValid = false;
        mostrarError('email', 'Por favor, ingresa un correo electrónico válido.');
    }

    // Validación de que el nombre no incluya números
    if (!validateName(values.nombre)) {
        isValid = false;
        mostrarError('nombre', 'El nombre no puede contener números ni caracteres especiales.');
    }
    if (!isValid) {//si no es valido, no se envia
        event.preventDefault();
    }
    else{
        mostrarConfirmacion();
        event.preventDefault();
        document.querySelector('form').reset(); // Resetea todos los campos del formulario
    }


    // Limpiar el formulario
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

function mostrarError(campo, mensaje) {//show mensaje de error
    const errorElement = document.getElementById(campo + '-error');

    if (errorElement){//si existe el elemento
        errorElement.textContent = mensaje;
        //para el lector de pantalla
        statusMessage.textContent = `Error en el campo ${campo}: ${mensaje}`;
        //muestro el mensaje de error visualmente
        errorElement.style.display = 'block';
    }
}
function ocultarError(campo) {//hide mensaje de error
    const errorElement = document.getElementById(campo + '-error');
    errorElement.style.display = 'none';
}

function mostrarConfirmacion(){//mensaje confirmando el envio del formulario
    //para el lector de pantalla
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'El formulario se envió correctamente.';
    
    //muestro visualmente la confirmacion
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion';
    confirmacion.textContent = 'El formulario se envió correctamente.';
    document.body.appendChild(confirmacion);
    
    setTimeout(function(){//elimino el mensaje de confirmacion a los 3seg
        confirmacion.remove();
    }, 3000);
}