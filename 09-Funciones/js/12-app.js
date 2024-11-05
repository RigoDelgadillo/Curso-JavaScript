const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


const nuevoArreglo = carrito.map( producto => `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`)

carrito.forEach( producto => `El Producto ${producto.nombre} tiene un precio de ${producto.precio}`)

console.log(nuevoArreglo);