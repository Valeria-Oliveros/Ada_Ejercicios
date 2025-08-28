//---------------------------
// Título: Clase 9
// Autor: Valeria Oliveros
// Fecha: 14/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Mostrar el número mayor o si son iguales

let numero1 = parseFloat(prompt('Ingrese el primer número: '));
let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
if (numero1 > numero2){
    console.log(`El número ${numero1} es mayor ✨`);
} else if (numero1 < numero2){
    console.log(`El número ${numero2} es mayor ✨`);
} else {
    console.log('Los números ingresados son iguales ✨');
}

// Ejercicio 2: Verificar si un números está dentro del rango definido

const rang_mi = 0;
const rang_ma = 6;
const rang = parseFloat(prompt('Ingrese un número cualquiera: '));
if (rang >= rang_mi && rang <= rang_ma){
    console.log(`✅ El número ${rang} se encuentra dentro del rango`);
} else {
    console.log(`⚠️ El número ${rang} no se encuentra dentro del rango`);
}

// Ejercicio 3: Mostrar los resultados de diversas convinaciones lógicas para 2 condiciones

let cond1 = prompt('¿Eres mayor de edad? (true/false)');
let cond2 = prompt('¿Tiene licencia de conducir? (true/false)');
if(cond1 == 'true' && cond2 == 'true'){
    console.log('✅ El usuario cumple con ambos requisitos');
}else if(cond1 == 'false' && cond2 == 'false'){
    console.log('❌ El usuario no cumple con ningun requisito');
}else {
    console.log('⚠️ El usuario no cumple con 1 de los requisitos');
}

// Ejercicio 4: Verificar si el nombre ingresado es igual a tu nombre

let nom1 = 'valeria';
let nom2 = prompt('Ingresa tu nombre: ');
if(nom1 === nom2){
    console.log('✅ Nos llamamos igual!');
} else { 
    console.log('❌ No nos llamamos igual!');
}

// Ejercicio 5: Mostrar el número mayor de 3 ingresados por el usuario

let mun1 = parseFloat(prompt('Ingresa el primer número: '));
let mun2 = parseFloat(prompt('Ingresa el segundo número: '));
let mun3 = parseFloat(prompt('Ingresa el tercer número: '));
if (mun1 > mun2 && mun1 > mun3){
    console.log(`El ${mun1} es el número mayor ✨`);
} else if (mun2 > mun1 && mun2 > mun3){
    console.log(`El ${mun2} es el número mayor ✨`);    
} else {
    console.log(`El ${mun3} es el número mayor ✨`);
}
