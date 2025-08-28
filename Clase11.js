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