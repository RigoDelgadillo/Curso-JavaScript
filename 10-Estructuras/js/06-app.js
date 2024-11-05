// Operador &&

const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Puedes pagar');
} else if(!usuario && !puedePagar){
    console.log('No puedes pagar')
} else if(!usuario) {
    console.log('Usuario No autenticado, inicia una nueva cuenta');
} else if(!puedePagar) {
    console.log('No puedes pagar');
}