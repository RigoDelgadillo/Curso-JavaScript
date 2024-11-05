const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar : function(){
        console.log('Pausando...');
    },
    borrar : function(id) {
        console.log(`Borrando canción con el id ${id}`);
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando PlayList con el id ${nombre}`);
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Corridos Tumbados');
reproductor.crearPlaylist('Corridos Bélicos');
reproductor.reproducirPlaylist('Corridos Tumbados')