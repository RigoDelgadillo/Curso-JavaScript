const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto...
const texto = 'en promoción'.repeat(2.4); // Se redondea

console.log(texto);

console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, Cocinar, Jugar, Programar, Ejercicio';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JavaScript Moderno #JSModernoConJuan';
console.log(tweet.split("#"));