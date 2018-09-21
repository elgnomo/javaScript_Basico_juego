var nombre = "Efrain";
var edad = 32;

// function imprimirEdad() {
//     console.log(`${nombre} tiene ${edad} año`);
// }

//Con parametros
function imprimirEdad(n, e) {
    console.log(`${nombre} tiene ${edad} años`);
}

imprimirEdad(nombre, edad);
imprimirEdad("Alan", 30);
imprimirEdad("Jose", 50);
imprimirEdad("30", "Luis");