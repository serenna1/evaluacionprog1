//ejercicio de parcial con parametro 
/*
2. Competencia de lanzamientos
Simular una competencia entre jugadores que lanzan dados por puntos.
 Cada jugador lanza 5 veces un dado (valor entre 1 y 6).
 Considera 10 jugadores, pero el numero puede variar.
 Sumar sus puntos totales.
 El que más puntos obtiene gana.
 Mostrar el ganador y los resultados finales de todos.
 Funciones: crearJugadores, realizarLanzamientos, mostrarPuntajes,
mostrarGanador, etc.
*/

//funcion sin parametros en una misma funcion:

const jugadores=[0,0,0,0,0,0,0,0,0,0];
let puntajeDeGanador = 0 ;
let posGanador = -1;//es para evitar confunciones porque el -1 no esta en las posiciones de un arreglo 
/*
function juego(){
    for(let posJugador = 0; posJugador < jugadores.length ;posJugador++){
        for(let tiro = 0 ;tiro < 5; tiro ++ ){
            jugadores[posJugador] += Math.floor(Math.random() * 6) + 1;//el 1 es el minimo el 6 es el num maximo
            // jugadores[posJugador] = jugadores[posJugador] + Math.floor(Math.random() * 6) + 1;  // es lo mismo que la linea de arriba 
        }
        if(puntajeDeGanador < jugadores[posJugador]){
            puntajeDeGanador = jugadores[posJugador];
            posGanador = posJugador;
        }
        
    }
    console.log (`los puntajes finales son ${jugadores},`);
    console.log(`El ganador es ${posGanador}, con ${puntajeDeGanador} estos puntos.` )

}
juego();
*/

// una funcion tiee la primicia de tener una unica iniciativa
//varias funciionescon parametros 
//tirarDados parte externa el nombre y lo de parentesis es la parte interna

function tirarDados(cantidadTiros, posJugador1){
    for(let tiro = 0 ;tiro < cantidadTiros; tiro ++ ){
            jugadores[posJugador1] += Math.floor(Math.random() * 6) + 1;
            
        }
}
function obtenerGanador(posJugador2){
    if(puntajeDeGanador < jugadores[posJugador2]){
            puntajeDeGanador = jugadores[posJugador2];
            posGanador = posJugador2;
        }
}
function mostrarResultados(){
    console.log (`los puntajes finales son ${jugadores},`);
    console.log(`El ganador es ${posGanador}, con ${puntajeDeGanador} estos puntos.` )
}

function juego2(){
    for(let posicionJugador = 0; posicionJugador < jugadores.length ;posicionJugador++){
       tirarDados (5 , posicionJugador);
       obtenerGanador(posicionJugador);
    }
    mostrarResultados();
}
juego2();
