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

// Envíar al final del arreglo 
carritoCompras.push(monitor);
carritoCompras.push(celular);

// Envíar al principio del arreglo
carritoCompras.unshift(teclado);

console.table(carritoCompras);
