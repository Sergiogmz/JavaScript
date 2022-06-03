/* -------------------------------------------------
            SET INTERVAL(intervalo de tiempo)
            setInterval(funcion, tiempo)
---------------------------------------------------*/
var tiempo = document.querySelector("#tiempo");
var segundos = 0;

var intervalo = setInterval(function(){

    segundos++;
    tiempo.innerHTML = segundos;
    //tiempo.innerHTML += segundos; En este caso concatenamos caracteres

}, 1000);

/* -------------------------------------------------
            SET TIMEOUT(retardo de tiempo)
            setTimeout(funcion, tiempo)
---------------------------------------------------*/

setTimeout(function(){

    clearInterval(intervalo);

}, 5000);