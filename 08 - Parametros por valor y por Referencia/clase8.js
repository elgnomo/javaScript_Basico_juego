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


function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var {
        nombre
    } = persona;
    console.log(nombre.toUpperCase());
}

function cumpleanos(edad) {
    edad += 1;
    console.log("Edad: ", edad);
}

function cumpleanos2(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

function imprimirNombreYEdad(persona) {
    var {
        nombre,
        edad
    } = persona;
    console.log("Hola, me llamo " + nombre.toUpperCase() + " y " + "tengo " + edad + " años ");
}

function imprimirNombreYEdad2(persona) {
    var {
        nombre,
        edad
    } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}
/*imprimirNombreEnMayusculas(efrain.nombre);
imprimirNombreEnMayu    sculas(marvin.nombre);*/

imprimirNombreEnMayusculas(efrain);
imprimirNombreEnMayusculas(marvin);
imprimirNombreYEdad(efrain);
imprimirNombreYEdad(marvin);
imprimirNombreYEdad2(efrain);
imprimirNombreYEdad2(marvin);
cumpleanos(efrain.edad);
cumpleanos2(efrain);