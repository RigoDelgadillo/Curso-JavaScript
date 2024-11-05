// ForEach

const lista = ['Tarea', 'Ingles', 'Estudiar JavaScript'];

lista.forEach((pendientes, i) => {

    console.log(`${i} : ${pendientes}`);

});


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audífonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const nuevoArreglo1 = carrito.forEach ( producto => console.log(producto.nombre));

const nuevoArreglo2 = carrito.forEach ( producto => console.log(producto.nombre));

console.log(nuevoArreglo1); 

console.log(nuevoArreglo2);
