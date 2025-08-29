//---------------------------
// Título: Clase 9
// Autor: Valeria Oliveros
// Fecha: 14/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require('prompt-sync')();

// Ejercicio 1: Mostrar el número mayor o si son iguales

console.log('---Ejercicio 1: Comparador de números---');
let numero1 = parseFloat(prompt('Ingrese el primer número: '));
let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
if (numero1 > numero2){
    console.log(`El número ${numero1} es mayor ✨ \n`);
} else if (numero1 < numero2){
    console.log(`El número ${numero2} es mayor ✨ \n`);
} else {
    console.log('Los números ingresados son iguales ✨ \n');
}

// Ejercicio 2: Verificar si un números está dentro del rango definido

console.log('---Ejercicio 2: Verifica si el número está en el rango---');
const rang_mi = 0;
const rang_ma = 6;
const rang = parseFloat(prompt('Ingrese un número cualquiera: '));
if (rang >= rang_mi && rang <= rang_ma){
    console.log(`✅ El número ${rang} se encuentra dentro del rango \n`);
} else {
    console.log(`⚠️ El número ${rang} no se encuentra dentro del rango \n`);
}

// Ejercicio 3: Mostrar los resultados de diversas convinaciones lógicas para 2 condiciones

console.log('---Ejercicio 3: Convinaciones lógicas---');
let cond1 = prompt('¿Eres mayor de edad? (true/false)');
let cond2 = prompt('¿Tiene licencia de conducir? (true/false)');
if(cond1 == 'true' && cond2 == 'true'){
    console.log('✅ El usuario cumple con ambos requisitos \n');
}else if(cond1 == 'false' && cond2 == 'false'){
    console.log('❌ El usuario no cumple con ningun requisito \n');
}else {
    console.log('⚠️ El usuario no cumple con 1 de los requisitos \n');
}

// Ejercicio 4: Verificar si el nombre ingresado es igual a tu nombre

console.log('---Ejercicio 4: Verifica el nombre ingresado---');
let nom1 = 'valeria';
let nom2 = prompt('Ingresa tu nombre: ');
if(nom1 === nom2){
    console.log('✅ Nos llamamos igual! \n');
} else { 
    console.log('❌ No nos llamamos igual! \n');
}

// Ejercicio 5: Mostrar el número mayor de 3 ingresados por el usuario

console.log('---Ejercicio 5: Mostrar el número mayor de 3 ingresados---');
let mun1 = parseFloat(prompt('Ingresa el primer número: '));
let mun2 = parseFloat(prompt('Ingresa el segundo número: '));
let mun3 = parseFloat(prompt('Ingresa el tercer número: '));
if (mun1 > mun2 && mun1 > mun3){
    console.log(`El ${mun1} es el número mayor ✨ \n`);
} else if (mun2 > mun1 && mun2 > mun3){
    console.log(`El ${mun2} es el número mayor ✨ \n`);    
} else {
    console.log(`El ${mun3} es el número mayor ✨ \n`);
}

// Ejercicio 6: Verificar si el usuario es mayor de edad

console.log('---Ejercicio 6: Verifica si el usuario es mayor de edad---');
let edad = prompt('Ingresa tu edad:');
if(edad >= 18){
    console.log('✅ El usuario es mayor de edad \n');
}else {
    console.log('⚠️ El usuario es menos de edad \n');
}

// Ejercicio 7: Mostrar el peso del usuario en libras

console.log('---Ejercicio 7: Convertidor de kg a lb---');
let pesok = prompt('Ingresa tu peso en KG:');
const lib= 2.20462;
let pesol = pesok * lib;
console.log(`Tu peso en libras es: ${pesol} lb ✨ \n`);

// Ejercicio 8: Mostrar el tipo de triagulo según las medidas

console.log('---Ejercicio 8: Tipo de triangulo---');
let la1 = prompt('Ingresa la longitud del lado 1:');
let la2 = prompt('Ingresa la longitud del lado 2:');
let la3 = prompt('Ingresa la longitud del lado 3:');
if(la1 === la2 && la2 === la3){
    console.log('Es un triangulo EQUILATERO ✨ \n');
}else if(la1 === la2 || la1 === la3 || la2 === la3){
    console.log('Es un triangulo ISOSCELES ✨ \n');
}else {
    console.log('Es un triangulo ESCALENO ✨ \n');
}

// Ejercicio 9: Mostrar el área y perimetro de un circulo

console.log('---Ejercicio 9: Área y perimetro de un circulo---');
let rad = prompt('Ingresa el radio del circulo:');
const pi = 3.14159;
let area = pi * (rad * rad);
let peri = 2 * pi * rad;
console.log(`El perimetro del circulo es: ${peri} ✨`);
console.log(`El area del circulo es: ${area} ✨ \n`);

// Ejercicio 10: Mostrar el día de la semana correspondiente 

console.log('---Ejercicio 10: Día de la semana según el número ingresado---');
let sem = prompt('Ingrese un número del 1 al 7:');
if(sem == 1){
    console.log('Estamos en el día LUNES ✨ \n');
} else if(sem == 2){
    console.log('Estamos en el día Martes ✨ \n');
} else if(sem == 3){
    console.log('Estamos en el día Miércoles ✨ \n');
} else if(sem == 4){
    console.log('Estamos en el día Jueves ✨ \n');
} else if(sem == 5){
    console.log('Estamos en el día Viernes ✨ \n');
} else if(sem == 6){
    console.log('Estamos en el día Sábado ✨ \n');
} else if(sem == 7){
    console.log('Estamos en el día Domingo ✨ \n');
} else {
    console.log('El número ingresado no es un día válido ⚠️ \n');
}