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