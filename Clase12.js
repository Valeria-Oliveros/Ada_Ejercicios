//---------------------------
// Título: Clase 12
// Autor: Valeria Oliveros
// Fecha: 28/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require("prompt-sync")();

// Ejercicio 1: Sumar todos los números ingresados, hasta que el usuaria pona un número negativo

console.log("---Ejercicio 1: Suma cadena de números---");
let suma = 0;
let num1 = parseInt(prompt("Ingrese un número (negativo para terminar): "));
while (num1 >= 0) {
    suma = suma + num1;
    num1 = parseInt(prompt("Ingrese un número (negativo para terminar): "));
}
console.log("✨ La suma total de los números ingresados es: " + suma + " \n");

// Ejecicio 2: Digite la contraseña 

console.log("---Ejercicio 2: Digite la contraseña---");
let contc = "1234";
let conti;
do {
    conti = prompt("Ingrese la contraseña: ");
    if (conti !== contc) {
        console.log("❌ Contraseña incorrecta. Intente nuevamente.");
    }
} while (conti !== contc);
console.log("✅ ¡Contraseña correcta! Bienvenido. \n");

// Ejercicio 3: Contar los números impares entre 0 y X

console.log("---Ejercicio 3: Contar números impares entre 0 y X---");
let x = parseInt(prompt("Ingrese un número entero positivo: "));
let num2 = 0;
for (let i = 0; i <= x; i ++) {
    if (i % 2 !== 0){
        num2++;
    }
}
console.log("✨ La cantidad de números impares entre 0 y " + x + " es: " + num2 + " \n");

// Ejercicio 4: Mostrar las notas de varios estudiantes

console.log("---Ejercicio 4: Mostrar notas de varios estudiantes---");
let notas = [];
let can = parseInt(prompt("¿Cuántas notas de estudiantes desea ingresar?: "));
for (let i = 0; i < can; i++) {
    let num3 = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1) + ": "));
    notas[i] = num3;
}
console.log("\n ✨ Las notas ingresadas son:");
for (let i = 0; i < notas.length; i++) {
    console.log("Estudiante " + (i + 1) + ": " + notas[i]);
}
console.log("\n");

// Ejercicio 5: Verificar si el nombre está en la lista ingresada

console.log("---Ejercicio 5: Verificar si el nombre está en la lista---");
let nomb = [];
for (let i = 0; i < 5; i++) {
    let nom = prompt("Ingresa el nombre " + (i + 1) + ": ");
    nomb[i] = nom;
}
console.log("Nombres ingresados correctamente ✨ \n");
let num4 = prompt("Ingrese un nombre para verificar si está en la lista: ");
if (nomb.includes(num4)) {
    console.log("✅ El nombre " + num4 + " está en la lista. \n");
} else {
    console.log("❌ El nombre " + num4 + " no está en la lista. \n");
}