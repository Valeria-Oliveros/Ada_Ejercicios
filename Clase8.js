//---------------------------
// Título: Clase 8
// Autor: Valeria Oliveros
// Fecha: 12/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Calcula el doble de un número

console.log('---Ejercicio 1: Calculadora de dobles---');
const num1 = parseFloat(prompt('Ingrese un número cualquiera: '));
let doble = num1 * 2;
console.log(`El doble de ${num1} es ${doble} ✨ \n`);

// Ejercicio 2: Verifica si un número es positivo, negativo o cero

console.log('---Ejercicio 2: Verificador de signos---');
const num2 = parseFloat(prompt('Ingrese un número cualquiera: '));
let res1 = '';
if (num2 > 0) {
    res1 = 'Positivo';
} else if (num2 < 0) {
    res1 = 'Negativo';
} else {
    res1 = 'Cero';
}   
console.log(`El número ${num2} es ${res1} ✨ \n`);

// Ejercicio 3: Suma de dos número ingresados por el usuario

console.log('---Ejercicio 3: Sumador de números---');
const num3_1 = parseFloat(prompt('Ingrese el primer número: '));
const num3_2 = parseFloat(prompt('Ingrese el segundo número: '));
let suma = num3_1 + num3_2;
console.log(`La suma de (${num3_1} + ${num3_2}) es igual a ${suma} ✨ \n`);

// Ejercicio 4: Determina si un número es par o impar

console.log('---Ejercicio 4: Determina si un número es par o impar---');
const num4 = parseFloat(prompt('Ingrese un número entero: '));
let res2 = num4 % 2;
if (res2 != 0) {
    console.log(`El número ${num4} es impar ✨ \n`);
} else {
    console.log(`El número ${num4} es par ✨ \n`);
}

// Ejercicio 5: Saludo personalizado

console.log('---Ejercicio 5: Saludo personalizado---');
const nom = prompt('Ingrese su nombre: ');
console.log(`¡Hey!😁 ${nom} ¡qué bueno verte por aquí!✨ \n`);