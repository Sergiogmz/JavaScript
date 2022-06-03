/*-------------------------------------------------------------------- 
            CLASES CREADAS POR EL DESARROLADOR
            (Otras clases vienen ya predefinidas, por ejemplo: 
            String, Number, Boolean, Array) 
---------------------------------------------------------------------*/

function Persona(){
    this.nombre;
    this.edad;
}

var persona = new Persona();
persona.nombre = "Luis";
persona.edad = 30;

console.log("Persona: ", persona);


//Clases con parametros
function Animales(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
}

var mascota = new Animales("perro","Pitbull");
console.log("Mascota: ", mascota);