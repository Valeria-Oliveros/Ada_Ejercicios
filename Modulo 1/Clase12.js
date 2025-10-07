//---------------------------
// Título: Clase 12
// Autor: Valeria Oliveros
// Fecha: 28/08/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require("prompt-sync")();

// Ejercicio 1: Sumar todos los números ingresados, hasta que el usuaria pona un número negativo

console.log("---Ejercicio 1: Suma cadena de números--- \n");
let suma = 0;
let num1 = parseInt(prompt("Ingrese un número (negativo para terminar): "));
while (num1 >= 0) {
    suma = suma + num1;
    num1 = parseInt(prompt("Ingrese un número (negativo para terminar): "));
}
console.log("✨ La suma total de los números ingresados es: " + suma + " \n");

// Ejecicio 2: Digite la contraseña 

console.log("---Ejercicio 2: Digite la contraseña--- \n");
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

console.log("---Ejercicio 3: Contar números impares entre 0 y X--- \n");
let x = parseInt(prompt("Ingrese un número entero positivo: "));
let num2 = 0;
for (let i = 0; i <= x; i ++) {
    if (i % 2 !== 0){
        num2++;
    }
}
console.log("✨ La cantidad de números impares entre 0 y " + x + " es: " + num2 + " \n");

// Ejercicio 4: Mostrar las notas de varios estudiantes

console.log("---Ejercicio 4: Mostrar notas de varios estudiantes--- \n");
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

console.log("---Ejercicio 5: Verificar si el nombre está en la lista--- \n");
console.log("Ingrese 5 nombres: ");
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

// Ejercicio 6: Sumar los números de una matriz que sean mayores o iguales a 10 y menores a 1000

console.log("---Ejercicio 6: Suma de números iguales a 10 pero menores de 1000--- \n");
let mat1 = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];
let sum1 = 0;
for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[i].length; j++) {
        let val1 = mat1[i][j];
        if (val1 >= 10 && val1 < 1000) {
            sum1 += val1;
        }
    }
}
console.log("✨ La suma de los elementos iguales a 10 y menores a 1000 es: " + sum1 + " \n");

// Ejercicio 7: Sumar todos los números de una matriz 5x5

console.log("---Ejercicio 7: Suma de matriz 5x5--- \n");
let mat2 = [
    [ 10,   4,   2,   8,   4],
    [ 50,   5,   5, 700,   9],
    [ 11,  13,  15,  17,  19],
    [ 20,   5,  30, 105,  40],
    [100, 200, 300, 400, 500] 
];
let sum2 = 0;
for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2[i].length; j++) {
        let val2 = mat2[i][j];
        sum2 += val2;
    }
}
console.log("✨ La suma de los elementos de la matriz 5x5 es: " + sum2 + " \n");

// Ejercicio 8: Sumar las diagonales roja y verde de una matriz 10x10

console.log("---Ejercicio 8: Suma de diagonales en matriz 10x10--- \n");
let mat3 =[];
for (let i = 0; i < 10; i++) {
    mat3[i] = [];   
    for (let j = 0; j < 10; j++) {
        mat3[i][j] = i * 10 + j + 1; 
    }
}
let diagr = [];
let sum31 = 0;
for (let i = 0; i < 10; i++) {
    diagr.push(mat3[i][i]);
}
for (let i = 0; i < diagr.length; i++) {
    sum31 += diagr[i];
}
let diagv = [];
let sum32 = 0; 
for (let i = 0; i < 10; i++) {
    diagv.push(mat3[i][9 - i]);
}   
for (let i = 0; i < diagv.length; i++) {
    sum32 += diagv[i];
} 
console.log("✨ La suma de la diagonal roja es: " + sum31);
console.log("✨ La suma de la diagonal verde es: " + sum32 + " \n");

// Ejercicio 9: Última aparición de un modelo de auto

console.log("---Ejercicio 9: Aplicación para control de gastos.--- \n");
console.log("✨Opciones: \n1️⃣  Total gastos en una semana del mes. \n2️⃣  Total gastos en un día del mes. \n3️⃣  Total de gastos en el mes. \n4️⃣  Semana con más gastos. \n5️⃣  Día con más gastos. \n");
let opc = parseInt(prompt("Ingrese la opción de la información que desea consultar: "));
let gas = [
    [1135, 2500,  900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300,  898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1900, 4500, 2560],
    [ 800, 1250, 1430, 2100, 2100, 1270,  950]
]
switch (opc){
    case 1:
        let sem = parseInt(prompt("Ingrese la semana del mes (1-4): "));
        if (sem >= 1 && sem <= 4){
            console.log("✨ El total de gastos en la semana " + sem + " es de: $" + totalsem(sem) + "\n");
        } else {
            console.log("❌ Semana inválida. \n");
        }
        break;
    case 2:
        let dia = parseInt(prompt("Ingrese el día del mes (1-7): "));
        if (dia >= 1 && dia <= 7){
            console.log("✨ El total de gastos en el día " + dia + " es de: $" + totaldia(dia) + "\n");
        } else {
            console.log("❌ Día inválido. \n");
        }
        break;
    case 3:
        console.log("✨ El total de gastos en el mes es de: $ " + totalmes() + "\n");
        break;
    case 4:
        console.log("✨ La semana con más gastos es: La semana " + semmas() + "\n");
        break;
    case 5:
        console.log("✨ El día con más gastos es: El día " + diamas() + "\n");
        break;
    default:
        console.log("❌ Opción inválida. \n");
        break;
}
function totalsem (sem){
    return gas[sem - 1].reduce((a, b) => a + b, 0);
}
function totaldia (dia){
    let total = 0;
    for (let i = 0; i < gas.length; i++){
        total += gas[i][dia - 1];
    }
    return total;
}
function totalmes (){
    let total = 0;
    for (let i = 0; i < gas.length; i++){
        for (let j = 0; j < gas[i].length; j++){
            total += gas[i][j];
        }
    }
    return total;
}
function semmas (){
    let max = totalsem(1);
    let semana = 1;
    for (let i = 2; i <= 4; i++){
        let total = totalsem(i);    
        if (total > max){
            max = total;
            semana = i;
        }
    }
    return semana;
}
function diamas (){
    let max = totaldia(1);
    let dia = 1;
    for (let i = 2; i <= 7; i++){
        let total = totaldia(i);    
        if (total > max){
            max = total;
            dia = i;
        }
    }
    return dia;
}