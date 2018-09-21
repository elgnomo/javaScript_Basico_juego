var persona = {
    nombre: "Efrain",
    apellido: "Antonio",
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${persona.nombre} pesa $persona.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = persona.peso - 3
var dias = 0

while (persona.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(persona)
    }
    if (realizaDeporte()) {
        adelgazar(persona)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazó 3kg`)


/*
    var persona = {
        nombre: 'Efrain',
        apellido: 'Antonio',
        peso: '55'
    }
    const META = persona.peso + 3
    const aumentarDePeso = persona => persona.peso += 0.4
    const bajarDePeso = persona => persona.peso -= 0.4
    var cont = 0

    function simular(persona) {
        while (persona.peso < META) {
            var random = Math.random()
            if (random < 0.75) {
                aumentarDePeso(persona)
            } else if (random < 1) {
                bajarDePeso(persona)
            }
            cont++
        }
    }

    simular(persona)
    console.log(`${persona.nombre} duró ${cont} dias`)
*/