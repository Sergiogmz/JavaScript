/* -------------------------------------------------------------------
            Math.random() = numero aleatorio
            Math.floor() = redondea al numero menos del decimal 
            Math.ceil() = redondea al numero mayor del decimal 
            Math.round() = devuelve al numero entero mas cercano
---------------------------------------------------------------------*/

var numeroAleatorio = document.querySelector('#numeroAleatorio');
var numero = 0;

numero = Math.round(Math.random()*100);

numeroAleatorio.innerHTML = numero;