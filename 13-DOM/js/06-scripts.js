const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText); //sil en el CSS - Visibility: hidden; no lo va a encontrar

console.log(encabezado.textContent); //si lo va a encontrar

console.log(encabezado.innerHTML); // se trae el html

// const nuevoHeading = 'Nuevo Mensaje';
//document.querySelector(.contenido-hero h1).textContent = nuevoHeading

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'