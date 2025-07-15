/*
6. Torneo de penales
Simular una tanda de penales entre dos equipos de fútbol.
 Dos equipos se enfrentan a 5 penales cada uno.
 Cada penal puede ser gol (1) o fallo (0), generado al azar.
 Gana el que más goles convierte.
 Funciones: crearEquipos, ejecutarPenales, mostrarResultado, etc.
*/
//intento 1:
//no funciona
/*
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
*/
//intento 2:
//funciona 
/*
let equipo1 = 0;
let equipo2 = 0;
let penal1 = 0;
let penal2 = 0;


function EquipoGanador(equipo1, equipo2){
  if (equipo1 > equipo2){
    console.log(`El equipo 1 gano con estos goles: ${equipo1}`)
  }else if(`equipo1 === equipo2`){
    console.log(`Los equipos empataron`)
  }else
    console.log(`El equipo 2 gano con estos goles ${equipo2}`)
}

function penales(cantidadepenales){
    for(let i = 0 ; i <= cantidadepenales; i ++){
   penal1 += Math.floor(Math.random ()*2) ;
    penal2 += Math.floor(Math.random()*2);

    if (penal1 === 1){
        equipo1 += penal1;
        console.log(`El equipo 1: metio goool`)
       
    }else 
        console.log(`El equipo 1: No metio gol`)
    
    if (penal2 === 1){
        equipo2 += penal2;
        console.log(`El equipo 2: metio goool`)
       
    }else 
        console.log(`El equipo 2: No metio gol`)
     
    }  
    console.log(`--------------`)
     EquipoGanador(equipo1,equipo2);
    }

function ejecutarpenales(){

    penales(5);
    console.log(`El equipo 1 metio: ${equipo1}`);
    console.log(`El Equipo 2 metio: ${equipo2}`);

}
ejecutarpenales();
*/

//codigo de gaspar:
/*
let equipo1 = [], equipo2 = []

function simularTanda (){
    for (let i = 0; i < 5; i++) {
        equipo1[i] = Math.floor(Math.random() * 2)       
    }
    for (let i = 0; i < 5; i++) {
        equipo2[i] = Math.floor(Math.random() * 2)        
    }
    equipoGanador();
}

function equipoGanador(){
    let ganador = ""
    let puntos1 = 0
    let puntos2 = 0
    for (let i = 0; i < equipo2.length; i++) {
        if (equipo2[i] == 1){
            puntos2 += 1
        }
    }
    for (let i = 0; i < equipo1.length; i++) {
        if (equipo1[i] == 1){
            puntos1 += 1
        }
    }
    if (puntos1 > puntos2){
        console.log("Ganó el equipo 1");        
    } else{
        console.log("Ganó el equipo 2");
        
    }
}
simularTanda();
console.log("Equipo 1: " + equipo1 + "\n" + "Equipo 2: "+ equipo2);
*/