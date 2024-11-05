const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// .replace reemplazar un a parte del string
console.log(producto.replace("Monitor","Monitor Curvo")); // la palabra monitor se reemplazara por la palabra monitor curvo

// .slice para cortar una parte del string
console.log(producto.slice(0,10)); // se muestra la cadena de texto a partir de la 0 hasta la 10
console.log(producto.slice(8)); // se muestra la cadena de texto apartir de la posicion 8
console.log(producto.slice(4,1)); // si el primer numero es mayor que el segundo no hace nada

// .substring ( Alternativa para slice ) 
console.log(producto.substring(4,1)); // se mostrara la posicion de la 2 a la 4
// la diferencia con slice es que aqui si primer numero > segundo numero si hará algo, se mostraran los caracteres que esten entre ellos

const nombre = 'Rigo';

console.log(nombre.substring(0,1)); // Se muestra solo la inicial del nombre
console.log(nombre.charAt(0)); //se muestra solo una sola letra, la posicion que pongas entre los parentesis