//Algoritmo que ayuda a crear al usuario una coleccion de albumes de música
let albums = [];
let resultado;

let numeroAlbums = prompt("Inserte el número de albums que desea registrar");

for( i = 0 ; i < numeroAlbums ; i++) {
  albums [i] = 
  {
    nombreAlbum : prompt("Inserte nombre del album"),
    artista : prompt("Inserte artista del album"),
    genero : prompt("Inserte género del album"),
    annio : prompt("Inserte fecha del album")
  }

  if (albums.length < numeroAlbums) {
    alert("Ingrese la información del siguiente album");
  } else {
    alert("Se han registrado sus álbumes correctamente")
  }
}

//Métodos utilizados para regresar un resultado dependiendo del género, artista o album
resultado = albums.map(album => album.artista);
alert("Tus artistas guardados son: " + resultado);

resultado = albums.map(album => album.nombreAlbum);
alert("Tus albums guardados son: " + resultado);

resultado = albums.map(album => album.genero);
alert("Tus géneros guardados son: " + resultado);


