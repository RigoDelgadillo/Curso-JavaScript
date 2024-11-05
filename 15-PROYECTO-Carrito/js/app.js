// Variables
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Cargar Event Listeners
eventListeners()
function eventListeners(){

    // Cuando agregas un curso al carrito dandole click a 'Añadir a Carrito'

    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);

    /* muy poco codigo, es mejor usar una función anonima en vez de crear una funcion */
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        carritoHTML();
    });
}

function eliminarCurso (e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // Si hay mas de 1 unidad del curso en el carrito
        const cantidadMayor = articulosCarrito.find(curso => curso.id === cursoId);

        if(cantidadMayor.cantidad > 1){

            cantidadMayor.cantidad--;
            
        } else {

            articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
            
        }

        carritoHTML();
    }

}

function agregarCurso(e){
    e.preventDefault(e);
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

// Extraer Datos del Curso
function leerDatosCurso(curso){
    
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // Verificamos si un curso existe
    const existe = articulosCarrito.find(curso => curso.id === infoCurso.id);

    if(existe == null){
        
        articulosCarrito = [...articulosCarrito, infoCurso];

    } else {

        existe.cantidad++;

    }

    carritoHTML();
}

// Se Muestra en el html la info de articulo
function carritoHTML() {

    // Limpiar el HTMl para Evitar Duplicados
    limpiarHTML();

    // Recorre el carrito y se muestra en el html
    articulosCarrito.forEach( curso => {
        // Aplicamos Distructuring
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width=150px />
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
        // Agrega el html del carrito
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    // Forma mas lenta
    // contenedorCarrito.innerHTML = '';

    // Forma rapida y eficiente
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}