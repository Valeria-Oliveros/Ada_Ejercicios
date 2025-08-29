//---------------------------
// Título: Clase 11
// Autor: Valeria Oliveros
// Fecha: 21/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Mostrar si el número es positivo, negativo o cero   

console.log('---Ejercicio 1: Determinar signo de un número---');
let num1 = parseInt(prompt('Ingrese un número cualquiera: '));
if (num1 > 0) {
    console.log(`El número ingresado (${num1}) es POSITIVO ✨ \n`);
} else if (num1 < 0) {
    console.log(`El número ingresado (${num1}) es NEGATIVO ✨ \n`);
} else {
    console.log(`El número ingresado (${num1}) es CERO ✨ \n`);
}

// Ejercicio 2: Semáforo inteligente 

console.log('---Ejercicio 2: Semáforo inteligente---');
let col = prompt("Ingresa el color del semáforo (rojo, amarillo o verde): ");
if (col == "rojo") {
    console.log('🔴 Alto, no puedes avanzar \n');
} else if (col == "amarillo") {
    console.log('🟡 Precaución, prepárate para avanzar \n');
} else if (col == "verde") {
    console.log('🟢 Avanza con seguridad \n');
} else {
    console.log('⚠️ Color no reconocido, ingresa rojo, amarillo o verde. \n');
}

// Ejercicio 3: Mostrar el conteo de números  

console.log('---Ejercicio 3: Conteo de números---');
let num2 = parseInt(prompt('Ingrese un número positivo: '));
if (num2 > 0) {
    console.log("Empezamos ...")
    for (let i = 1; i <= num2; i++) {
        console.log(i);
    }
    console.log(" \n");
} else {
    consle.log('⚠️ El número ingresado no es válido. \n');
}

// Ejercicio 4: Mostrar el número es par o impar

console.log('---Ejercicio 4: Determinar si un número es par o impar---');
const num3 = parseInt(prompt('Ingrese un número entero: '));
let res1 = num3 % 2;
if (res1 != 0) {
    console.log(`El número que ingresaste (${num3}) es IMPAR ✨ \n`);
} else {
    console.log(`El número que ingresaste (${num3}) es PAR ✨ \n`);
}

// Ejercicio 5: Mostrar el conte de números pares en un rango

console.log('---Ejercicio 5: Conteo de números pares en un rango---');
let numi = parseInt(prompt('Ingresa el primer número (inicio): '));
let numf = parseInt(prompt('Ingresa el segundo número (fin): '));
if (numi < numf) {
    console.log("Empezamos ...")
    for (let i = numi; i <= numf; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("\n");
} else {
    console.log('⚠️ El rango de números no es valido, vuelve a intentarlo. \n');
}

// Ejercicio 6: Mostrar la tabla de multiplicar de un número

console.log('---Ejercicio 6: Tabla de multiplicar---');
let num4 = parseInt(prompt('Ingrese un número cualquiera: '));
console.log(`La tabla del número ${num4} es:`);
if (num4 > 0) {
    for (let i = 1; i <= 10; i++) { 
        let res2 = num4 * i;
        console.log(`${num4} x ${i} = ${res2}`);
    }
    console.log("\n");
}

// Ejercicio 7: Mostrar el calculo que elija el usuario (+, -, *, /)

console.log('---Ejercicio 7: Calculadora básica---');
let op = parseInt(prompt('Ingresa la operación (1.suma, 2.resta, 3.multiplicacion, 4.division): '));
let num5 = parseInt(prompt('Ingresa el primer número: '));
let num6 = parseInt(prompt('Ingresa el segundo número: '));
let res3;
switch (op) {
    case 1:
        res3 = num5 + num6; 
        console.log(`✨ El resultado de la suma ${num5} + ${num6} = ${res3} \n`);
        break;
    case 2:
        res3 = num5 - num6;
        console.log(`✨ El resultado de la resta ${num5} - ${num6} = ${res3} \n`);
        break;  
    case 3:
        res3 = num5 * num6;
        console.log(`✨ El resultado de la multiplicación ${num5} * ${num6} = ${res3} \n`);
        break;
    case 4:
        if (num6 != 0) {
            res3 = num5 / num6;
            console.log(`✨ El resultado de la división ${num5} / ${num6} = ${res3} \n`);
        } else {
            console.log('⚠️ Error: No se puede dividir \n');
        }   
        break;
    default:
        console.log('⚠️ Operación no válida, vuelva a intentarlo. \n');
        break;
}

// Ejercicio 8: Mostrar los multiplos de un número del 1 al 100

console.log('---Ejercicio 8: Múltiplos de un número entre 1 y 100---');
let num7 = parseInt(prompt('Ingresa un número positivo: '));
if (num7 > 0) {
    console.log(`✨ Los multiplos de ${num7} entre 1 y 100 son:`);
    for (let i = 1; i <= 100; i++) {
        if (i % num7 === 0) {
            console.log(i);
        }   
    }
    console.log("\n");
}

// Ejercicio 9: Mostrar la cuenta regresiva de un despegue 

console.log("---Ejercicio 9: Cuenta de despegue---")
console.log('Iniciando cuenta regresiva ...');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('¡Despegue! 🚀 \n');

// Ejercicio 10: Adivina un número al azar en 3 intentos 

console.log("---Ejercicio 10: Adivina el número---")
let nums = Math.floor(Math.random() * 10) + 1;
for (let i = 1; i <= 3; i++) {
    let num8 = parseInt(prompt('Ingresa un número entre 1 y 10: '));
    if (num8 === nums) {
        console.log('🎉 ¡Felicidades! ¡Adivinaste el número! \n');
        break;
    } else {
        if (i < 3) {
            if (num8 < nums) {
                console.log('🔼 El número es mayor. Inténtalo de nuevo.');
            } else if (num8 > nums) {
                console.log('🔽 El número es menor. Inténtalo de nuevo.');
            }
        } else {    
           console.log(`❌ Lo siento, has agotado tus intentos. El número era ${nums}. \n`);
        }  
    }
}