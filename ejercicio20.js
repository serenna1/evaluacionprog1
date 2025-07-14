/*20. Competencia de secado de ropa
Simular 3 días seguidos donde varias prendas se secan al sol.
 Cada prenda (5 en total) necesita llegar a 100 puntos de "secado".
 Cada día, según la temperatura y el viento, suman entre 10 y 40 puntos.
 Mostrar cuántos días tarda cada prenda en secarse completamente.
 Funciones: crearPrendas, simularDia, actualizarSecado, mostrarResultados,
etc.
*/

let Prendas = [0,0,0,0,0];
let Ganador = false;
let MaximoDePuntos = 100;
let posicionPrendaGanadora = -1;
let acumuladorDePuntos = 0;
let acumuladorDeDias = [0,0,0,0,0];
let contadordepuntos = 0;

function verificarGandor(posiciondePrendas){
    console.log(`La prenda  ${posiciondePrendas}, tiene estos puntos ${Prendas[posiciondePrendas]}`)
    if(Prendas[posiciondePrendas] >= MaximoDePuntos){
        Ganador = true;
        posicionPrendaGanadora = posiciondePrendas;
        acumuladorDePuntos = Prendas[posiciondePrendas];
    }

}
function simularDia(posicionPrendas){
    for(let dia = 0; dia < 3 ; dia ++){
        Prendas[posicionPrendas] += Math.floor(Math.random()*40 ) + 10;
        verificarGandor(posicionPrendas);
        acumuladorDeDias[posicionPrendas] ++;
        acumuladorDePuntos = Prendas[posicionPrendas];
        if (Ganador === true){
            break;
        }
    }
    
    console.log(`--------------`);
    console.log(`La prenda ${posicionPrendas}, va ${acumuladorDeDias[posicionPrendas]} dias con esta cantidad de puntos: ${Prendas[posicionPrendas]}`);
    console.log(`-----------------`);
}
function MostrarResultados (){
    console.log(`Hay 5 prendas, la que llega primero a 100 puntos de secado gana.`);
    for (let i = 0; i < Prendas.length; i++){
       simularDia(i);
        if(Ganador === true){
            console.log(`La prenda ganadora ${posicionPrendaGanadora} gano con los puntos  de secasdo: ${acumuladorDePuntos}.`)
            break;
        } 
    }
    if (Ganador=== false){
        console.log(`Ninguna prenda llego a los puntos de secado necesarios para ganar. `)
    }
    
}
MostrarResultados();




/*22. Competencia de árboles frutales
Simular el crecimiento y producción de 3 árboles frutales.
 Cada árbol crece entre 2 y 5 cm por día.
 A los 50 cm comienzan a producir frutos (1 a 3 por día).
 Gana el árbol que produce 20 frutos primero.
 Funciones: crearArboles, crecer, producirFrutos, verificarGanador,
mostrarEstadisticas etc*/
/*
22. Competencia de árboles frutales
Simular el crecimiento y producción de 3 árboles frutales.
 Cada árbol crece entre 2 y 5 cm por día.
 A los 50 cm comienzan a producir frutos (1 a 3 por día).
 Gana el árbol que produce 20 frutos primero.
 Funciones: crearArboles, crecer, producirFrutos, verificarGanador,
mostrarEstadisticas etc.

let arboles= [0,0];

function crearArboles(arboles){
    for (let i = 0; i<=3; i++){
        arboles += arboles[i];
    }

}
console.log(arboles)
*/