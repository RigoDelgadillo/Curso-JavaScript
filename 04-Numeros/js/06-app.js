const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log( Number.parseInt(numero1) );
console.log( Number.parseFloat(numero2) );
console.log( Number.parseFloat(numero3) );

// Revisar si es un numero o no
console.log( Number.isInteger(numero1));
console.log( Number.isInteger(numero4));