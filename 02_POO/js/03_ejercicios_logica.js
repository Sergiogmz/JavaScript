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

/*--------------------------------------------------------------------------------------
   Caso 2: Caballos
   El caballo de Mac es mas oscuro que el de Smith, pero mas rapido y viejo 
   que el de Jack, que es aun mas lento que el de Willy, que es mas joven que el de Mac,
   que es mas viejo que el de Smith, que es mas claro que el de Willy, aunque 
   el de Jack es mas lento y mas oscuro que el de Smith.
   Cual es el mas viejo, cual el mas lento y cual el mas claro?             
---------------------------------------------------------------------------------------*/

var caballo = {
    Mac: {
        color: 0, velocidad: 0, edad: 0
    },
    Jack: {
        color: 0, velocidad: 0, edad: 0
    },
    Smith: { 
        color: 0, velocidad: 0, edad: 0
    },
    Willy: { color: 0, velocidad: 0, edad: 0
    },
    resultado: function(){
        if( this.Mac.color > this.Smith.color    &&
            this.Mac.velocidad > this.Jack.velocidad &&
            this.Mac.edad > this.Jack.edad  &&
            this.Willy.velocidad > this.Jack.velocidad    &&
            this.Mac.edad > this.Willy.edad &&
            this.Mac.edad > this.Smith.edad &&
            this.Willy.color > this.Smith.color    &&
            this.Smith.velocidad > this.Jack.velocidad &&
            this.Jack.color > this.Smith.color  ){
                
                return true;
        }
                return false;
    },
    intervalo: setInterval(function(){

        caballo.Mac.color = Math.ceil(Math.random()*2);
        caballo.Mac.velocidad = Math.ceil(Math.random()*2);
        caballo.Mac.edad = Math.ceil(Math.random()*2);

        caballo.Jack.color = Math.ceil(Math.random()*2);
        caballo.Jack.velocidad = Math.ceil(Math.random()*2);
        caballo.Jack.edad = Math.ceil(Math.random()*2);

        caballo.Smith.color = Math.ceil(Math.random()*2);
        caballo.Smith.velocidad = Math.ceil(Math.random()*2);
        caballo.Smith.edad = Math.ceil(Math.random()*2);

        caballo.Willy.color = Math.ceil(Math.random()*2);
        caballo.Willy.velocidad = Math.ceil(Math.random()*2);
        caballo.Willy.edad = Math.ceil(Math.random()*2);

        if(caballo.resultado()){
            clearInterval(caballo.intervalo);
            console.log('Caballo de Mac', caballo.Mac);
            console.log('Caballo de Jack', caballo.Jack);
            console.log('Caballo de Smith', caballo.Smith);
            console.log('Caballo de Willy', caballo.Willy);
        }

    },1)

}
