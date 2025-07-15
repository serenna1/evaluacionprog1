/* Simular un juego en el que los jugadores intentan adivinar un numero secreto.
- se genera un numero secreto entre 1 y 50.
- simular que 4 jugadores intentan adivinarlo con intentos aleatorios.
- cada uno tiene hasta 10 intentos.
- el que adivina primero gana.
funciones: generarNumero, crearJugadores, realizarIntentos, verificarGandor, etc.
*/
//intento 1:
/*
function JuegoDeAdivinar(){
    const jugadores = [0,0,0,0];
    const numeroSecreto =[0,0,0,0];
    let puntajeGanador = 0;
    let posicionDelGanador = -1;
    ganador = false;

    for (let i = 0; i< numeroSecreto.length;i++){
        numeroSecreto[i] = Math.floor(Math.random() * 50);
        for(let e = 0; e <jugadores.length;e++){
            jugadores[e] = Math.floor(Math.random() * 50);
            if (numeroSecreto[i]==jugadores[e]){
                puntajeGanador = jugadores[e];
                posicionDelGanador = e;
                ganador = true;
                break;
            }
        }
         while(ganador === false){
        console.log(`Creo que no hubo ganador`);
        break;

    }
    
    }
    console.log(`Los numeros secretos son: ${numeroSecreto}, y los numeros de los jugadores son: ${jugadores}`);
    if (ganador===false){
        console.log(`no hubo acierto `);
    }else
    console.log(`El juagdor que acerto, en la posicion de: ${posicionDelGanador}, con e puntaje de: ${puntajeGanador}`);
    

}
JuegoDeAdivinar();
*/


//intento 2:
//funciona:
function JuegoDeAdivinar (){
    let numeroSecreto = Math.floor(Math.random()*50) + 1;
    let jugadores = [0,0,0,0];
    let posicionDelGanador = -1;  
    let puntaje = 0;
    ganador = false;
    let cantidadDeIntentos = Math.floor(Math.random() * 10)+1;

    console.log(`La cantidad de intentos es: ${cantidadDeIntentos}, tenga en cuenta que fue aleatorio!`);
    console.log (`El numero secreto es: ${numeroSecreto}.`);
    for (let i = 0; i < jugadores.length; i ++){
        
        for (let e = 0; e < cantidadDeIntentos ; e++){

        jugadores[i] =  Math.floor(Math.random() * 50) + 1
        
        console.log(`Jugador ${i}: ${jugadores[i]}. `);

        if(jugadores[i] === numeroSecreto){
            ganador = true;
            posicionDelGanador = i;
            puntaje = numeroSecreto;
            break;
        }else
        ganador = false;
     }
     console.log("--------------");
     if (ganador === true ){
        break;
     }
    }
        //consultamos si hay ganador.        
    if (ganador === true){
        
        console.log(` El jugador ${posicionDelGanador}, gano con el puntaje de: ${puntaje}.`);
    }else
    console.log (`Ningun jugador tuvo acierto`);
    
}
JuegoDeAdivinar();

/*
JuegoDeAdivinar();
*//* Simular un juego en el que los jugadores intentan adivinar un numero secreto.
- se genera un numero secreto entre 1 y 50.✅
- simular que 4 jugadores intentan adivinarlo con intentos aleatorios.
- cada uno tiene hasta 10 intentos aleatorios.✅
- el que adivina primero gana.
funciones: generarNumero, crearJugadores, realizarIntentos, verificarGandor, etc.
*/
/*
//ejercicio en clase 
//estas variables son globales necesarias para todas als funciones
let posicionDelGanador = -1;
let acumuladorDeNumeroGanador = 0;
let NumeroSecreto = Math.floor(Math.random () * 20 )+1;
NumeroDeIntento = Math.floor (Math.random()*10)+1;
let jugadores = [0,0,0,0];
ganador = false;

//el parametro en la funciones es la poscion del arreglo jugadores
function verificandoGanador (posicionjugador){
    console.log(`El jugador ${posicionjugador}, eligio el numero ${jugadores[posicionjugador]}`)
    if (jugadores[posicionjugador] === NumeroSecreto){
        acumuladorDeNumeroGanador = NumeroSecreto;
        posicionDelGanador = posicionjugador;
        ganador = true;
        
    }else 
    ganador = false;
}

function intentosAleatorios(posicionjugador){
    
    
     for(let e = 0 ; e < NumeroDeIntento; e++){
        jugadores[posicionjugador] =+ Math.floor (Math.random()*20 )+1;
        verificandoGanador(posicionjugador);
        if (ganador === true){
            
        break;
      }
      
        

    }
}
function JuegoDeAdivinar (){
    console.log(`Los jugadores tienen un numero aleatorio de intentos: ${NumeroDeIntento}, para adivinar el numero: ${NumeroSecreto}`)
    
    for (let posicionjugador = 0; posicionjugador < jugadores.length; posicionjugador ++){

        intentosAleatorios(posicionjugador);
        console.log(`-------------------`);
        if (ganador === true){
        console.log(`El jugador  Ganador ${posicionDelGanador}  adivino el numero numero secreto: ${acumuladorDeNumeroGanador}`)
        break;
        }
      
    }
    if (ganador === false){
        console.log(`Ningun jugador adivino el numero. `)
    }
    

}
JuegoDeAdivinar();
*/