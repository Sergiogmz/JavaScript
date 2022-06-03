/* --------------------------------
            EVENTOS EN EL DOM 
---------------------------------*/

var cuadrado = document.querySelector("#cuadrado");

function cambiarColor(){
	cuadrado.style.background = "orange";
}

/* --------------------------------
            EVENTOS EN JAVASCRIPT 
---------------------------------*/

var boton = document.querySelector("#boton");
boton.addEventListener("click", moverCaja);

function moverCaja(){
	cuadrado.style.width = "300px";
	cuadrado.style.transition = "1s width ease";
}