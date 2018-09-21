//Comparar Primitivos
var x = 4,
    y = "4"; //"=" Asignar una Variable
//== comparar lleva los dos valor aun mismo tipo de dato
//=== Si se quiere distingir del tipo de dato

//Comparar Objetos
var Persona = {
    nombre: "Efrain"
};

/*
 var otraPersona = {
     nombre: "Efrain"
};
*/

var otraPersona1 = Persona; //Apuntan a la misma memoria ram
console.log("== Uno", Persona == otraPersona1);

var otraPersona2 = {
    ...Persona
} //otro objeto
console.log("== Dos", Persona == otraPersona2);
//... desglosar