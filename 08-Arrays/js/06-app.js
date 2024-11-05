const carritoCompras = [];

// Definir producto
const monitor = {
    nombre : "Monitor 32 Pulgadas",
    precio : 400
}

const celular = {
    nombre : "Celular",
    precio : 800
}
const teclado = {
    nombre : "Teclado",
    precio : 100
}

let resultado;

resultado = [ ...carritoCompras, monitor ];

resultado = [ ...resultado, celular ];

resultado = [ teclado, ...resultado ];

console.table(resultado);
