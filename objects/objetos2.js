//Objetos literales

//Declaración
let punto = new Object();
let punto = {};

//Asignación de valores
punto.x = 5;
punto.y = punto.x*2;

//Métodos del objeto

punto.mostrarCoordenadas = function() {
    return `(${punto.x}, ${punto.y})`;
}

//Asignación de valores y metodos en la declaración del objeto

let punto = {
    x: 3,
    y: 6,
    mostrarCoordenadas: function() {
        return `${this.x}, ${this.y}`
    }
}

//Recorrer objetos

for(let prop in punto){
    console.log(`${prop} tiene el valor ${punto[prop]}`);
}

//Recorrer un objeto sin mostrar las funciones

for(let prop in punto){
    if(typeof punto[prop] != "function"){
        console.group(`${prop} tiene el valor ${punto[prop]}`);
    }
}

delete punto.x;