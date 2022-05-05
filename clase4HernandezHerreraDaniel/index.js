//Algoritmo que calcula el promedio de N calificaciones de un alumno

//Declaramos las variables
let numeroCalif;
let calificacion = [];
let resultado;
let promedio;

//Utilizamos un ciclo DO-WHILE para que se ejecute el código al menos una vez, si el usuario requiere calcular un nuevo promedio, al cumplir la condición, se vuelve a ejecutar el código 
do {
    //Declaramos la variable suma dentro del ciclo para que al reiniciar el DO-WHILE no se quede con el valor del anterior cálculo
    let suma = 0;
    numeroCalif = parseFloat(prompt('Ingrese la cantidad de notas a promediar'));
    
    //Creamos un for para que recorra los índices del array que guardará las notas 
    for( let i = 0 ; i < numeroCalif ; i++ ) {

        //Obtenemos nota por nota a traves del prompt cada vez que la vaiable iterativa aumenta
        calificacion [i]= parseFloat(prompt('Ingrese la calificacion #' + (i + 1)));

        //En cada iteración vamos sumando las notas y el resultado lo guardamos en la variable "Suma"
        suma += calificacion[i];
    }
    //Creamos una funcion expresiva de tipo flecha para realizar la división entre la suma de las calificaciones y el número de calificaciones
    promedio = (a,b) => a / b;
    
    //Mandamos a llamar la función y guardamos el valor en el resultado
    resultado = promedio(suma,numeroCalif);

    alert('El promedio de edad es: ' + resultado);

    respuesta = prompt('¿Desea calcular otro promedio?');
    
} while (respuesta == 'si' || respuesta == 'Si' );
