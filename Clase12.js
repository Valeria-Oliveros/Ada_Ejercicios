//---------------------------
// Título: Clase 12
// Autor: Valeria Oliveros
// Fecha: 28/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Sumar todos los números ingresados, hasta que el usuaria pona un número negativo

console.log("---Ejercicio 1: Suma cadena de números---");
let suma = 0;
let num1;
do {
    num1 = parseInt(prompt("Ingrese un número (negativo para terminar): "));
    if (num1 >= 0) {
        suma = suma + num1;
    }
} while (num1 >= 0 );
console.log("✨ La suma total de los números ingresados es: " + suma + " \n");