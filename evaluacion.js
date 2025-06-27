/*
* evaluacion de programacion 26/6
competencia de saltos 
hay que similuar una competencia de salto an largo entre varios atletas.
8 atlletas hacen 3 intentos de saltos(medidos en metros aleatorios entre 5 y 10 )
guardar e mejor salto de cada uno 
gana el de salto mas largo 
mostrar el ganador y la ista total de resultados 
funciones a crear:crearAtletas, reaizarSaltos, registrarMejor, mostrarGanador
*/
function competenciasDeSaltos(){
 let atletas=[1, 2, 3, 4, 5, 6, 7, 8];
 let mejorSalto = 0;
 let mejorAtleta = 0;
 
 
 
 for(let i = 0; i <atletas.length; i++){
    for(let e = 0; e < 3; e++ ){
        let metroDelSalto = Math.floor(Math.random() * 10 + 5);
        console.log(`El atleta ${atletas[i]} Recorrio tantos metros: ${metroDelSalto}`);
        
       if(metroDelSalto > mejorSalto){
        mejorSalto = metroDelSalto;
       }
    
    }
     console.log(`El mejor salto del atleta ${atletas[i]} es ${mejorSalto} `);
     mejorSalto = 0;

       
 }
 
}
competenciasDeSaltos();
