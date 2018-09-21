var persona_Uno = {
    nombre: 'Efrain',
    apellido: "Antonio",
    edad: 32,
    //edad: 17,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false,
};

var persona_Dos = {
    nombre: 'Marvin',
    apellido: "Huerta",
    //edad: 32,
    edad: 17,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false,
};
/*
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`) //Interponer variables
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.cocinero) {
        console.log('Cocinero');
    }
    if (persona.dj) {
        console.log('DJ');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista');
    }
    if (persona.drone) {
        console.log('Vuela Drone');
    }
}
imprimirProfesiones(persona);
*/
/*
function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}
*/

const MAYORIA_DE_EDAD = 18;
/*
const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}; //funcion anonima
*/

//Arrow Function
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD; Como le pasamos un objetos que tiene edad se puede destructurar
const esMayorDeEdad = ({
    edad
}) => edad >= MAYORIA_DE_EDAD;
/*
function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) { //si no
        console.log("Acceso Denegado");
    } else {
        console.log("Acceso Permitido");
    }
}
*/

const permitirAcceso = persona => !esMayorDeEdad(persona) ? console.log('ACCESO DENEGADO') : console.log('ACCESO PERMITIDO')
/*
1- Es conveniente que al declarar la variable a la cuál se le asignará la Arrow Function 
como una constante cons , para que tengamos identificada a la misma como una función y no como una variable.
2- Eliminar la palabra function y seguido de los parámetros cambiarla por la flecha =>
3- Si tenemos solo 1 parámetro podemos eliminar a los paréntesis que los contienen .
4- Si la función lo único que hace es retornar algo, js nos permite eliminar la 
palabra return así como las llaves que contienen al cuerpo de la función,** js retornará implicitamente lo 
que viene después de la flecha**
*/
//un solo valor se pueden quitar los parantesis
//si solo regresa un valor
/* 
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
};
*/
function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
};



imprimirSiEsMayorDeEdad(persona_Uno);
imprimirSiEsMayorDeEdad(persona_Dos);
permitirAcceso(persona_Uno);
permitirAcceso(persona_Dos);