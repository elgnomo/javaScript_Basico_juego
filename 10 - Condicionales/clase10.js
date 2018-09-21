var persona = {
    nombre: 'Efrain',
    apellido: "Antonio",
    //edad: 32,
    edad: 17,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false,
}

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

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }
}

imprimirProfesiones(persona);
imprimirSiEsMayorDeEdad(persona);