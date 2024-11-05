iniciarApp()

function iniciarApp() {
    console.log('Iniciando App...');

    appIniciada();

}

function appIniciada() {
    console.log('App Iniciada Correctamente...');

    usuarioAutenticacion('Rigo');
}

function usuarioAutenticacion(usuario) {

    console.log('Autenticando... espere...')
    console.log(`El Usuario: ${usuario} Ha Sido Autenticado Correctamente!`);
}