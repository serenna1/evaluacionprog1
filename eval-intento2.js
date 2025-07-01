/*
* evaluacion de programacion 26/6
competencia de saltos 
hay que similuar una competencia de salto an largo entre varios atletas.
8 atlletas hacen 3 intentos de saltos(medidos en metros aleatorios entre 5 y 10 )

guardar el mejor salto de cada uno 
gana el de salto mas largo 
mostrar el ganador y la ista total de resultados 
funciones a crear:crearAtletas, reaizarSaltos, registrarMejor, mostrarGanador
*/
/*
let salto = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
*/
function CrearAtletas(){
let atletas = [1, 2, 3];
let MejorSalto = [];
let SaltoGanador = [];
let atletaGanador = [];

for (let i = 0 ; i < atletas.length ; i++){
    for(let e = 0; e < 3; e++){
        let metros = Math.floor (Math.random()* (10 - 5 + 1)) + 5;
        console.log(`el atleta ${atletas[i]} , tuvo un salto de ${metros} metros`);
        
       if (metros > MejorSalto ){
        MejorSalto = metros;
       } 
    }
    console.log(`El mejor salto del atleta  ${atletas[i]} es ${MejorSalto}`);
    MejorSalto = 0;
    
    for (let m = 0 ;)
    if (MejorSalto > SaltoGanador ){
        SaltoGanador = MejorSalto;

        
    }
    console.log(`El atleta ganador ${atletas[i]} con el salto de ${SaltoGanador}`);
    
    
    
    
}

}
CrearAtletas();