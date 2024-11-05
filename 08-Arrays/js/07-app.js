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

// // Eliminar último elemento de un arreglo
// carritoCompras.pop();
// console.table(carritoCompras);

// // Eliminar el primer elemento de un arreglo
// carritoCompras.shift();
// console.table(carritoCompras);

carritoCompras.splice(1,1); // Comienzas desde la posicion 1 y eliminas 1 elemento
/* Splice funciona comenzando desde la posicion de la cual empezara a eliminar y despues colocas el otro valor que significa cuantos elementos eliminaras */
console.table(carritoCompras);