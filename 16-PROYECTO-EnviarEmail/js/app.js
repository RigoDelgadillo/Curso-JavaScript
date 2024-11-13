document.addEventListener('DOMContentLoaded', function(){


    email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    // Eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    
    
    function validar(e) {

        if( e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); // Se muestra la alerta en el lugar como referencia
            return;
        }

        if(e.target.id == 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return;
        }

        limpiarAlerta(e.target.parentElement); // Se elimina la alerta que esta en ese lugar como referencia

        // Cuando se validan los campos se guardan en el objeto

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){ // Funcion para mostrar alerta, generamos el elemento HTML y lo agregamos en el lugar que indique cuando manden a llamar la funcion

        limpiarAlerta(referencia); // limpiamos la alerta en el lugar que indiquen en la llamada de la funcion

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar error al HTML
        referencia.appendChild(error);
    
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600'); // seleccionamos la alerta
        if(alerta){ // Comparamos si existe esa alerta
            alerta.remove(); // Si existe, Eliminamos
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);

        return resultado;
    }

    function comprobarEmail() {
        console.log(Object.values(email).includes(''));
    }



});