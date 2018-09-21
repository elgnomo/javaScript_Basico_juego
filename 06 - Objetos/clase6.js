"use strict"
var efrain = {
    nombre: "Efrain",
    apellido: "Antonio",
    edad: 32,
}

var marvin = {
    nombre: "Marvin",
    apellido: "Huerta",
    edad: 32,
}
/*var nombre1 = "Efrain";
var nombre2 = "Dario";*/

/*function imprimirNombreEnMayusculas(persona) {
    let nombre = persona.nombre.toUpperCase();
    console.log("Nombre: ", nombre);
}*/

function imprimirNombreEnMayusculas({ //llaves y los atributos que nos interesan
    nombre
}) {
    console.log(nombre.toUpperCase());
}

/*imprimirNombreEnMayusculas(efrain.nombre);
imprimirNombreEnMayu    sculas(marvin.nombre);*/

imprimirNombreEnMayusculas(efrain);
imprimirNombreEnMayusculas(marvin);
imprimirNombreEnMayusculas({
    nombre: "Gnomito"
});