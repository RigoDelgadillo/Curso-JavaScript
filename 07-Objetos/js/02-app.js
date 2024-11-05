const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}
/* Acceder a un valor de un objeto se usa la sintaxis de punto */
console.log(producto.nombre); // Acceder al nombre del producto
console.log(producto.precio); // Acceder al precio del producto
console.log(producto.disponible); // Acceder a la disponibilidad del producto


/* Tambien se puede usar la sintaxis a continuacion, solo que no es tan comúm pero suele ser útil en algunos casos y es importante conocerla */

console.log( producto['nombre'] );
console.log( producto['precio'] );
console.log( producto['disponible'] );