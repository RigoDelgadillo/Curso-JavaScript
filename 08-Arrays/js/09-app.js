const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

for (let i = 0 ; i < carrito.length; i++) {
    // console.log(`El producto ${carrito[i].nombre} tiene un precio de ${carrito[i].precio}`)
}

carrito.forEach( function(producto) {
    console.log(`El Producto ${producto.nombre} tiene un precio de ${producto.precio}`)
} )