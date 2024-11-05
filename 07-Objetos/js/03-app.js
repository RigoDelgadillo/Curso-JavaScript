const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

/*  Agregar nuevas propiedades al objeto 

    objeto.propiedadNueva = valor;

    Aquí se utliza el signo de igual porque está fuera del objeto
*/
producto.imagen = "imagen.jpg";

/* 
Eliminar propiedades del objeto 
*/

delete producto.disponible;

console.log(producto);