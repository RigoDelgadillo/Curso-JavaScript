const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Cuanto Mide Un Arreglo

console.log(meses.length);

/* El Arreglo como máximo será hasta menor de la cantidad de productos, ya que el arreglo comienza a contar desde 0 */
for(let i = 0; i < meses.length; i++){
    console.log( meses[i] );
}