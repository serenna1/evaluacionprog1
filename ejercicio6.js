/*
6. Torneo de penales
Simular una tanda de penales entre dos equipos de fútbol.
 Dos equipos se enfrentan a 5 penales cada uno.
 Cada penal puede ser gol (1) o fallo (0), generado al azar.
 Gana el que más goles convierte.
 Funciones: crearEquipos, ejecutarPenales, mostrarResultado, etc.
*/
let equipos = [0,0];
let acumuladorgol1 = 0;
let acumuladorgol2 = 0;
     
function EquipoGanador(acumuladorgol1, acumuladorgol2){
  if (acumuladorgol1 > acumuladorgol2){
    console.log(`El equipo 0 gano con estos goles: ${acumuladorgol1}`)
  }else if(acumuladorgol1 === acumuladorgol2){
    console.log(`Los equipos empataron`)
  }else
    console.log(`El equipo 1 gano con estos goles ${acumuladorgol2}`)
}

function penales(cantidadepenales,posiciondeequipo ){
    for(let i = 0 ; i < cantidadepenales; i ++){
    equipos[posiciondeequipo] += Math.floor(Math.random ()*2) ;
    if (equipos[0] === 1){
        console.log(`El equipo ${posiciondeequipo}, metio gol`)
        acumuladorgol1 ++;
    }else 
        console.log(`El equipo ${posiciondeequipo}, no metio gol`)
        if (equipos[1] === 1){
        console.log(`El equipo ${posiciondeequipo}, metio gol`)
        acumuladorgol2 ++;
    }else 
        console.log(`El equipo ${posiciondeequipo}, no metio gol`)
     
    }  
     EquipoGanador(acumuladorgol1,acumuladorgol2);
    }    
function ejecutarpenales(){
 for (let posiciondeequipo = 0; posiciondeequipo < equipos.length; posiciondeequipo++){
    penales(5, posiciondeequipo);

 }
}
ejecutarpenales();
function MostrarResultados (){
    ejecutarpenales;

}