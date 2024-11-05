"use strict"
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.seal( producto ); // Congela el objeto, actúa como un const no se puede agregar, modificar ni eliminar propiedades

producto.disponible = false;
// producto.imagen = 'Imagen.jpg';
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));