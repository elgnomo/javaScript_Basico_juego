var edad = 32;
//edad = edad + 1;
edad += 1;
console.log("edad += 1; ", edad);

var peso = 80;
//peso = peso - 2;
peso -= 2;
console.log("peso -= 2; ", peso);

var sandwich = 1;
//peso = peso + sandwich;
peso += sandwich;
console.log("peso += jugarFutbol; ", peso);

var jugarFutbol = 3;
//peso = peso - jugarFutbol;
peso -= jugarFutbol;
console.log("peso -= jugarFutbol; ", peso);

var precioVino = 200.3;
//var total = precioVino * 3;
//var total = precioVino * 100 * 3 / 100;
var total = Math.round(precioVino * 100 * 3) / 100;
console.log("total ", total);

var totalStr = total.toFixed(3);
console.log("totalStr ", totalStr);

var total2 = parseFloat(totalStr);
console.log("total2 ", total2);

var pizza = 8;
var persona = 2;
var cantidadDePorciones = pizza / persona;
console.log("cantidadDePorciones ", cantidadDePorciones);