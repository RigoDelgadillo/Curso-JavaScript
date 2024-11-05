// Switch case

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'efectivo': 
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has seleccionado metodo de pago o método de pago no soportado');
}