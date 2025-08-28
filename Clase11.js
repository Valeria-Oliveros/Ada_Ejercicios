//---------------------------
// Título: Clase 11
// Autor: Valeria Oliveros
// Fecha: 21/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Mostrar si el número es positivo, negativo o cero    

let num1 = parseFloat(prompt('Ingrese un número cualquiera: '));
if (num1 > 0) {
    console.log(`El número ingresado (${num1}) es POSITIVO ✨`);
} else if (num1 < 0) {
    console.log(`El número ingresado (${num1}) es NEGATIVO ✨`);
} else {
    console.log(`El número ingresado (${num1}) es CERO ✨`);
}

// Ejercicio 2: Semáforo inteligente 

let col = prompt("Ingresa el color del semáforo (rojo, amarillo o verde): ");
if (col == "rojo") {
    console.log('🔴 Alto, no puedes avanzar');
} else if (col == "amarillo") {
    console.log('🟡 Precaución, prepárate para avanzar');
} else if (col == "verde") {
    console.log('🟢 Avanza con seguridad');
} else {
    console.log('⚠️ Color no reconocido, ingresa rojo, amarillo o verde.');
}

// Ejercicio 3: Mostrar el conteo de números  

let num2 = parseFloat(prompt('Ingrese un número positivo: '));
if (num2 > 0) {
    for (let i = 1; i <= num2; i++) {
        console.log(i);
    }
}

// Ejercicio 4: Mostrar el número es par o impar

const num3 = parseFloat(prompt('Ingrese un número entero: '));
let res1 = num3 % 2;
if (res1 != 0) {
    console.log(`El número que ingresaste (${num3}) es IMPAR ✨`);
} else {
    console.log(`El número que ingresaste (${num3}) es PAR ✨`);
}

// Ejercicio 5: Mostrar el conte de números pares en un rango

let numi = parseFloat(prompt('Ingresa el primer número (inicio): '));
let numf = parseFloat(prompt('Ingresa el segundo número (fin): '));
if (numi < numf) {
    for (let i = numi; i <= numf; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
} else {
    console.log('⚠️ El rango de números no es valido, vuelve a intentarlo.');
}

// Ejercicio 6: Mostrar la tabla de multiplicar de un número

let num4 = parseFloat(prompt('Ingrese un número cualquiera: '));
console.log(`La tabla del número ${num4} es:`);
if (num4 > 0) {
    for (let i = 1; i <= 10; i++) { 
        let res2 = num4 * i;
        console.log(`${num4} x ${i} = ${res2}`);
    }
}

// Ejercicio 7: Mostrar el calculo que elija el usuario (+, -, *, /)



// Ejercicio 8: Mostrar los multiplos de un número del 1 al 100

let num7 = parseFloat(prompt('Ingresa un número positivo: '));
if (num7 > 0) {
    console.log(`✨ Los multiplos de ${num7} entre 1 y 100 son:`);
    for (let i = 1; i <= 100; i++) {
        if (i % num7 === 0) {
            console.log(i);
        }   
    }
}

// Ejercicio 9: Mostrar la cuenta regresiva de un despegue 

console.log('Iniciando cuenta regresiva ...');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('¡Despegue! 🚀');

// Ejercicio 10: Adivina un número al azar en 3 intentos 

