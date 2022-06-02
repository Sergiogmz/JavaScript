/* --------------------------------
            BUCLES 
---------------------------------*/

//For
for(var i = 0; i <= 5; i++){
    console.log('i:', i);
}

//Caso de ejemplo para manipular el DOM con for
var cajas = document.querySelectorAll('.cajas');
console.log(cajas);

for(var i = 0; cajas.length; i++){

	cajas[i].style.width = '50px';
	cajas[i].style.height = '50px';
	cajas[i].style.background = 'blue';
    cajas[i].style.marginTop = '5px';
	cajas[i].style.marginRight = '5px';//CSS margin-left, en JavaScript no puedes incluir guiones
	cajas[i].style.display = 'inline-block';
}

//While
var n = 0;

while(n <= 5){
    console.log(n);
    n++;    
}

//Do while
var n = 0;
do{
    console.log('n:', n);
    n++;
}
while(n <= 5); 



