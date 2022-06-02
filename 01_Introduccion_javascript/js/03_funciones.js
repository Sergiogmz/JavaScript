/* --------------------------------
            FUNCIONES 
---------------------------------*/

//Funciones sin parametros
function saludo(){
    console.log('saludo:','Hola');
}
saludo();

//Funciones con parametros
function operacion(numero1, numero2){
    var resultado = numero1 + numero2;
    console.log(resultado);
}
operacion(5,5);
operacion(10,11);

//Funciones de retorno sin parametros
function resultado(){
    var boolean = true;
    return boolean;
}
resultado();

//Funciones de retorno con parametros
function resultadoParametros(numero){
    return numero;
}
console.log(resultadoParametros(5));