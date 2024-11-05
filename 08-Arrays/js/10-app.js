const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


const nuevoArreglo = carrito.map( function(producto) {
    return`El Producto ${producto.nombre} tiene un precio de ${producto.precio}`
} )

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

/* La diferencia entre .map y .forEach es que en map se puede crear otro arreglo y en forEach no */