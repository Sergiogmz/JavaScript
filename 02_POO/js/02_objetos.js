/*-------------------------------------------------------------------- 
                OBJETOS propiedades y funciones
---------------------------------------------------------------------*/

var objeto = {
    nombre: 'Juan',
    edad: 32,

    descripcion: function(){
        console.log('Su nombre es '+objeto.nombre+' y su edad es '+objeto.edad);
    },
    
    saludar: function(saludo){
        console.log(saludo+' '+objeto.nombre);
    }

}

objeto.descripcion();
objeto.saludar('Hola');
