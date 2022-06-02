/* --------------------------------
            CONDICIONALES 
---------------------------------*/

var a = 10;
var b = 5;

if(a > b){
    console.log('La variable A es mayor que B');
}else if(a == b){
    console.log('La variable A es igual a B');
}else{
    console.log('La variable A y B no son iguales');
}

/* --------------------------------
            SWITCH 
---------------------------------*/

var dia = 'lunes';

switch('lunes') {
    case 'sabado':
        console.log('Repaso JavaScript');
        break;
    
    case 'domingo':
        console.log('Hoy es dia para descansar');
        break;
    
    case 'martes':
        console.log('Comiezo a estudiar React');
        break;

    case 'miercoles':
        console.log('Comienzo a estudiar Angular');
        break;
    
    default:
        console.log('Dia para reflexionar');

}