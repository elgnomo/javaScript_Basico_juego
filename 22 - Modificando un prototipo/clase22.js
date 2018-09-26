/*Antes muchos lo realizaban de esta manera
var obj = {};
obj.nombre = nombre;
obj.apellido = apellido;
return obj;
*/

/*
Hablar de objetos en javascript es hablar de prototipos.
this hace referencia al nuevo objeto que se acaba de crear.
la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
*/

function Persona(nombre, apellido, altura) {
    //console.log("Arranca");
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    //return this;
};

// Persona.prototype.soyAlto = function () {
//     this.altura >= 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
// }

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
//Vamos a hacer con arrow function
Persona.prototype.soyAlto = () => 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)

var efrain = new Persona('Efrain', 'Antonio', 1.60);
var marvin = new Persona('Marvin', 'Huerta', 1.80);
var adriana = new Persona('Adriana', 'Rodriguez', 1.50);
console.log("efrain: ", efrain);
console.log("efrainThis: ", Persona());
efrain.saludar() //Homa me llamo chanito...
marvin.saludar()
adriana.saludar()
efrain.soyAlto() //Homa me llamo chanito...
marvin.soyAlto()
adriana.soyAlto()
//Si no usamos "new" y llamamos con this