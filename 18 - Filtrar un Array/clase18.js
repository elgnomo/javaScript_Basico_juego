var persona_01 = {
    nombre: 'Efrain',
    apellido: 'Antonio',
    altura: 1.61
}

var persona_02 = {
    nombre: 'Marvin',
    apellido: 'Huerta',
    altura: 1.86
}

var persona_03 = {
    nombre: 'Ramon',
    apellido: 'Ramirez',
    altura: 1.85
}

var persona_04 = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var persona_05 = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var persona_06 = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
/*
const esAlta = (persona) => {
    return persona.altura > 1.8
}
*/
//const esAlta = persona => persona.altura > 1.8;
//Desglosar
const esAlta = ({
    altura
}) => altura > 1.8;

const esBaja = ({
    altura
}) => !esAlta({
    altura
}) //RETO

var personas = [persona_01, persona_02, persona_03, persona_04, persona_05, persona_06];

// for (var i = 0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura}mts`)
// }

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja)
/*
var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
})*/
console.log(personasAltas);
console.log(personasBajas)