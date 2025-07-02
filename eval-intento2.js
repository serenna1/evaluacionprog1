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
let atletas = [1, 2, 3, 4, 5, 6 ,7 ,8];
let MejorSalto = [0,0,0,0,0,0,0,0];
let SaltoGanador = [];
let atletaGanador = [];

for (let i = 0 ; i < atletas.length ; i++){
    for(let e = 0; e < 3; e++){
        let metros = Math.floor (Math.random()* (10 - 5 + 1)) + 5;
        console.log(`El atleta ${atletas[i]} , tuvo un salto de ${metros} metros`);
        
       if (metros > MejorSalto[i]){
        MejorSalto[i] = metros;
       } 
    }

    console.log(`El mejor salto del atleta  ${atletas[i]} es ${MejorSalto[i]}`);
   // MejorSalto = 0;
    
    
}
let mejor=0,mejorIndiceAtleta=-1;
for (let m = 0; m <MejorSalto.length; m++){
    if (MejorSalto[m]>mejor){
        mejor=MejorSalto[m];
        mejorIndiceAtleta=m;
    }

}
console.log(`El mejor salto es de ${mejor}, y es del atleta ${atletas[mejorIndiceAtleta]}`);
   


}
CrearAtletas();