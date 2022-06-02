/* --------------------------------
            VARIABLES 
---------------------------------*/

//Numericas
var numero = 1;
console.log('numero:', numero);

//String
var nombre = 'Luis';
console.log('nombre:', nombre);

//Booleana
var booleana = true;
console.log('booleana:', booleana);

//Array
var colores = ['rojo', 'amarillo']
console.log('color:', colores[0]);

//Objeto
var zumo = {ingrediente1: 'platano',
            ingrediente2: 'fresa',
            ingrediente3: 'manzana'}
console.log('zumo', zumo);
console.log('ingrediente:', zumo.ingrediente2);

/* Variables DOM (Document Object Model)
Estructura de objetos que genera el navegador 
cuando se carga un documento y se puede alterar mediante 
JavaScript, cambiando dinamicamente contenido y aspecto de 
la pagina */

var caja = document.querySelector('#caja');
console.log('caja', caja);

caja.style.width = '200px';
caja.style.height = '200px';
caja.style.background = 'red';

var cajas = document.querySelectorAll('.cajas');
console.log('cajas', cajas);
