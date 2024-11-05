const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}

// Destructuring

const { nombre } = producto;

console.log(nombre);

// Desctructuring con Arreglos

const numeros = [10,20,30,40,50];

// const [ , , tercero] = numeros;

const [ , , , ...tercero] = numeros;

console.log(tercero);