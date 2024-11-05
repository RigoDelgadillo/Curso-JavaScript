// Crear un nuevo elemento Html

// Creamos una etiqueta tipo enlace ( <a> )
const nuevoEnlace = document.createElement('A');

// Creamos el texto que va a tener el enlace
nuevoEnlace.textContent = 'Nuevo Enlace';

// Creamos la clase
nuevoEnlace.classList.add('nueva-clase');

// Insertamos en el DOM
const navegacion = document.querySelector('.navegacion');

navegacion.insertBefore(nuevoEnlace, navegacion.children[2]);


// Agregar un card
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Corridos Tumbados';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Creamos el div donde se insertaran los parrafos
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Creamos una imagen
const imagen = document.createElement('img');
imagen.src = 'img/corridos.jpg';

// Creamos el div donde se intertara la info y la imagen
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen); 
card.appendChild(info); 

// Insertamos al HTML

const contenedorCards = document.querySelector('.hacer .contenedor-cards');

contenedorCards.insertBefore(card, contenedorCards.children[0]);

console.log(contenedorCards);
