const autenticado = true;

if(autenticado) {
    console.log('El usuario si esta autenticado');
}

const puntaje = 450;

function revisarPuntaje() {
    if( puntaje > 400 ) {
        console.log('Excelente!!');
        return;
    }

    if( puntaje > 300 ) {
        console.log('Buen puntaje, sigue asi!!');
        return;
    }
}

revisarPuntaje();