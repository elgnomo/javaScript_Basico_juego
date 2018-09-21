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

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
};

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
};


imprimirSiEsMayorDeEdad(persona_Uno);
imprimirSiEsMayorDeEdad(persona_Dos);