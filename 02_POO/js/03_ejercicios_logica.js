/*--------------------------------------------------------------------------------------
   Caso 1: Cuatro atletas
   De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente
   detras de B, y D ha llegado en medio de A y C. Calcular el orden de llegada             
---------------------------------------------------------------------------------------*/

var atleta = {
    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function(){

        if(atleta.C > atleta.B && 
           atleta.D > atleta.B &&
           atleta.D > atleta.C &&
           atleta.D < atleta.A){

            return true;

           }

           return false;

    },
    intervalo: setInterval(function(){

        atleta.A = Math.ceil(Math.random()*4);
        atleta.B = Math.ceil(Math.random()*4);
        atleta.C = Math.ceil(Math.random()*4);
        atleta.D = Math.ceil(Math.random()*4);

        if(atleta.resultado()){
            clearInterval(atleta.intervalo);
            console.log('Atleta A: '+atleta.A);
            console.log('Atleta B: '+atleta.B);
            console.log('Atleta C: '+atleta.C);
            console.log('Atleta D: '+atleta.D);
        }

    },1)

}