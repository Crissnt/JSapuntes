//Definición de objetos

//Utilizando un literal
let persona1 = {
    nombre: 'Luis',
    apellido : 'González',
    dni: 12341234};


//Utilizando 'new'

let persona2 = new Object();
datos.nombre = 'Anna';
datos.apellido = 'González';
datos.dni = 43214321;

//Definiendo un constructor

function Persona (nom, ape, dni){
    this.nombre = nom;
    this.apellido = ape;
    this.dni = dni;
}

let persona3 = new Persona('Peter', 'Mccree', '10010010');


