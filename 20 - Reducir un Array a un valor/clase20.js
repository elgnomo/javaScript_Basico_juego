var persona_01 = {
    nombre: 'Efrain',
    apellido: 'Antonio',
    altura: 1.61,
    cantidadDeLibros: 7787
}

var persona_02 = {
    nombre: 'Marvin',
    apellido: 'Huerta',
    altura: 1.86,
    cantidadDeLibros: 778
}

var persona_03 = {
    nombre: 'Ramon',
    apellido: 'Ramirez',
    altura: 1.85,
    cantidadDeLibros: 77
}

var persona_04 = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 712312
}

var persona_05 = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 773
}

var persona_06 = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 73
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

// persona.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var acum = 0;

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja)
/*
var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
})*/

/*
    for (var i = 0; i < personas.length; i++) {
        acum = acum + personas[i].cantidadDeLibros;
    }
*/

/*
const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}
*/

const reducer = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0);

console.log("personasAltas ", personasAltas);
console.log("personasBajas ", personasBajas);
console.log("personasMts: ", personas);
var personasCms = personas.map(pasarAlturaACms)
console.log("personasCms: ", personasCms);
//console.log(`En total todos tienen ${acum} libros`);
console.log(`En total todos tienen ${totalDeLibros} libros`);