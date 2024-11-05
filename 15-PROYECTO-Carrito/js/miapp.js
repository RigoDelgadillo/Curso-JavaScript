// Variables
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
let articulosCarrito = [];

// Eventos

eventListeners()

function eventListeners() {

    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);
    
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Vacía el arreglo donde estaban todos los productos del carrito
        carritoHTML();
    })
}
// Funciones

function eliminarCurso( e ) {
    
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        
        // si hay mas de 1 unidad del curso en el carrito
        const cantidad = articulosCarrito.find(curso => cursoId === curso.id );

        if(cantidad.cantidad > 1) {
            cantidad.cantidad--;
        } else {
            articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );
        }
        carritoHTML();
    }
    
}

function agregarCurso(e){
    e.preventDefault(); // Para que no se recarge la página al hacer click

    if(e.target.classList.contains('agregar-carrito')){ // Si diste click exactamente en la classlist se ejecutará el códig

        cursoSeleccionado = e.target.parentElement.parentElement; // La variable contiene el primer padre, el cual tiene todos los datos del curso seleccionado

        leerDatosCurso(cursoSeleccionado);
    }
}
// Lee datos de el curso seleccionado
function leerDatosCurso(curso) {
    // Lee datos de el curso seleccionado

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // verificamos si un curso existe

    const existe = articulosCarrito.find( curso => curso.id === infoCurso.id );

    if( existe == null) {
        articulosCarrito = [...articulosCarrito, infoCurso];
    } else {
        existe.cantidad++;
    }


    carritoHTML();
}

function carritoHTML (){

    limpiarHTML();

    articulosCarrito.forEach(curso => {

        const { imagen, titulo, precio, cantidad, id } = curso

        const row = document.createElement('tr');
        row.innerHTML = 
        `
        <td> 
            <img src='${imagen}' width="150px" />
        </td> 
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> 
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
        
        contenedorCarrito.appendChild(row);
    })
    
}
function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}