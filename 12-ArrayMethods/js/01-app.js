const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un mes existe

// meses.forEach((mes) => {
//     if ( mes === 'Enero' ){
//         console.log('Si existe');
//     }
// });

// const resultado = meses.includes('Enero');
// console.log(resultado);

// En un arreglo de objetos se utiliza .some
const existe = carrito.some( producto => producto.nombre === 'Televisión');
console.log(existe);

// .some en arreglo clasico

const existe2 = meses.some( mes => mes === 'Enero');
console.log(existe2);