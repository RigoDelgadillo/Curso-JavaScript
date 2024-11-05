// for ( let i = 0; i <= 20; i++) {
//     if( i=== 5 ) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`el numero es: ${i}`);
// }

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400, descuento: true },
    { nombre: 'Celular', precio: 700 },
];

for( let i = 0; i < carrito.length; i++) {

    if( carrito[i].descuento ) {
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre);
}