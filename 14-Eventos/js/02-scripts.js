const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', () => {
    console.log('Entrando en la navegacion');
    nav.style.backgroundColor = 'white';
});

// mousedown - similar a un click
// click
// dblclick - doble click
// mouseup - cuando sueltas el mouse