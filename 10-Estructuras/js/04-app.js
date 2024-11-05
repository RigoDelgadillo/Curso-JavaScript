// operador mayor que y menor que

const dinero = 300;
totalAPagar = 500;
tarjeta = false;
cheque = false;

if(dinero > totalAPagar) {
    console.log('Si podemos pagar');
} else if(cheque){
    console.log('Si tengo un cheque')
} else if(tarjeta){
    console.log('Si tengo una tarjeta')
}
else {
    console.log('Fondos Insuficiente');
}