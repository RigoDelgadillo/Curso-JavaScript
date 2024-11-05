const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(Object.keys( producto ) ); // Dá las propiedades, se usa para saber si un objeto esta vacío

console.log( Object.values( producto ) ); // Dá los valores que tiene cada propiedad

console.log( Object.entries( producto ) ); // Dá todo lo anterior pero a la par