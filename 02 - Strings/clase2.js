//console.log('Hola Mundo JS');
var nombre = "Efrain",
    apellido = "Antonio";

var nombreEnMayusculas = nombre.toUpperCase(); //mayusculas
var apellidoEnMinusculas = apellido.toLocaleUpperCase(); //minusculas

var primeraLetraDelNombre = nombre.charAt(0); //Posicion de la LetrA
var cantidadDeLetrasDelNombre = nombre.length; //Longitud de la palabra

var nombreCompleto = nombre + " " + apellido; //concatenar

var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`;

var strChart = nombre.charAt(1) + nombre.charAt(2);
var strSubstr = nombre.substr(1, 2);

var nombreLast = nombre.substr(nombre.length - 1)