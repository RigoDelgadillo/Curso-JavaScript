const reproductor = {
    reproducir : id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar : () =>console.log('Pausando...'),
    borrar : id => console.log(`Borrando canción con el id ${id}`),
    crearPlaylist : nombre =>console.log(`Creando PlayList con el id ${nombre}`),
    reproducirPlaylist : nombre => console.log(`Reproduciendo la Playlist ${nombre}`),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }


}

reproductor.nuevaCancion = 'Psicodelica';
reproductor.obtenerCancion;

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Corridos Tumbados');
reproductor.crearPlaylist('Corridos Bélicos');
reproductor.reproducirPlaylist('Corridos Tumbados')