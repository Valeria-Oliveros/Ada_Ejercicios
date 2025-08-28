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

// Ejercicio 6: Verificar si el usuario es mayor de edad

let edad = prompt('Ingresa tu edad:');
if(edad >= 18){
    console.log('✅ El usuario es mayor de edad');
}else {
    console.log('⚠️ El usuario es menos de edad');
}

// Ejercicio 7: Mostrar el peso del usuario en libras

let pesok = prompt('Ingresa tu peso en KG:');
const lib= 2.20462;
let pesol = pesok * lib;
console.log(`Tu peso en libras es: ${pesol} lb ✨`);

// Ejercicio 8: Mostrar el tipo de triagulo según las medidas

let la1 = prompt('Ingresa la longitud del lado 1:');
let la2 = prompt('Ingresa la longitud del lado 2:');
let la3 = prompt('Ingresa la longitud del lado 3:');
if(la1 === la2 && la2 === la3){
    console.log('Es un triangulo EQUILATERO ✨');
}else if(la1 === la2 || la1 === la3 || la2 === la3){
    console.log('Es un triangulo ISOSCELES ✨');
}else {
    console.log('Es un triangulo ESCALENO ✨');
}

// Ejercicio 9: Mostrar el área y perimetro de un circulo

let rad = prompt('Ingresa el radio del circulo:');
const pi = 3.14159;
let area = pi * (rad * rad);
let peri = 2 * pi * rad;
console.log(`El perimetro del circulo es: ${peri} ✨`);
console.log(`El area del circulo es: ${area} ✨`);

// Ejercicio 10: Mostrar el día de la semana correspondiente 

let sem = prompt('Ingrese un número del 1 al 7:');
if(sem == 1){
    console.log('Estamos en el día LUNES ✨');
} else if(sem == 2){
    console.log('Estamos en el día Martes ✨');
} else if(sem == 3){
    console.log('Estamos en el día Miércoles ✨');
} else if(sem == 4){
    console.log('Estamos en el día Jueves ✨');
} else if(sem == 5){
    console.log('Estamos en el día Viernes ✨');
} else if(sem == 6){
    console.log('Estamos en el día Sábado ✨');
} else if(sem == 7){
    console.log('Estamos en el día Domingo ✨');
} else {
    console.log('El número ingresado no es un día válido ⚠️');
}