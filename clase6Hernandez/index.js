//Algoritmo que ayuda a crear al usuario una coleccion de albumes de música
let coleccion = [];
let respuesta;

let numeroAlbums = prompt("Inserte el número de albums que desea registrar");

for( i = 0 ; i < numeroAlbums ; i++) {
  coleccion [i] = 
  {
    album : prompt("Inserte nombre del album"),
    artista : prompt("Inserte artista del album"),
    genero : prompt("Inserte género del album"),
    annio : prompt("Inserte fecha del album")
  }

  if (coleccion.length < numeroAlbums) {
    alert("Ingrese la información del siguiente album");
  } else {
    alert("Se han registrado sus álbumes correctamente")
  }
}
respuesta = prompt("Deseas eliminar el último album registrado?");

if (respuesta == 'si' || respuesta == 'Si') {
  coleccion.pop();
  alert("Tus cambios se han guardado");
} else {
  alert("Gracias por usar Album Collection");
}

