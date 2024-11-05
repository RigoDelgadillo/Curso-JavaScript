// Object Literal 
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

/* Aunque object constructor es mas dinamico se utliza mas el object literal */

// Object Constructor = +Dinamico
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const Producto2 = new Producto('Monitor 24 Pulgadas',300);
console.log(Producto2);