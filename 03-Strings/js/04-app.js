const producto = '           Monitor 20 Pulgadas          ';

console.log(producto);

console.log(producto.length);
//Cortar espacios en blanco al inicio
console.log(producto.trimStart());
// Cortar espacios en blanco al final
console.log(producto.trimEnd());

// Cortar espacios en blanco en ambas direcciones
console.log(producto.trimStart().trimEnd()); // más nueva
console.log(producto.trim()); // la que se usaba anteriormente