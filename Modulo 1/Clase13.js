//---------------------------
// Título: Clase 13
// Autor: Valeria Oliveros
// Fecha: 02/09/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require("prompt-sync")();

// Ejercicio 1: Calcular el área de un triángulo

console.log("---Ejercicio 1: Calcular el área de un triángulo--- \n");
function calcularareatriangulo(base, altura) {
    return (base * altura) / 2;
}   

let base = parseInt(prompt("Ingrese la base del triángulo: "));
let altura = parseInt(prompt("Ingrese la altura del triángulo: "));   
let area = calcularareatriangulo(base, altura);
console.log("✨ El área del triángulo es: " + area + "\n");

// Ejercicio 2: Crear una función para devolverl el número mayor 

console.log("---Ejercicio 2: Número mayor--- \n");
function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return("✨ El número " + num1 + " es mayor que " + num2 + "\n");
    } if (num1 === num2){
        return("✨ Los números " + num1 + " y " + num2 + " son iguales" + "\n");
    }else {
        return("✨ El número " + num2 + " es mayor que " + num1 + "\n");
    }
}
let num11 = parseInt(prompt("Ingrese el primer número: "));
let num12 = parseInt(prompt("Ingrese el segundo número: "));
let mayor = encontrarMayor(num11, num12);
console.log(mayor);

// Ejercicio 3: Imprimir un mensaje global y local

console.log("---Ejercicio 3: Menaje global y local--- \n");
let saludoGlobal = "Hola desde el scope global ✨";
function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local ✨";
    return (saludoGlobal + "\n" + saludoLocal + "\n");
}
let mensaje = mostrarMensaje();
console.log(mensaje);

// Ejercicio 4: Crear una función para saber si el número es par o impar

console.log("---Ejercicio 4: Número par o impar--- \n");
function esPar (num) {
    let resul;
    if (num % 2 === 0) {
        resul = ("Par ✨");
    } else {
        resul = ("Impar ✨");
    }
    return resul;
}
let num4 = parseInt(prompt("Ingrese un número: "));
let resultado = esPar(num4);
console.log("El número " + num4 + " es " + resultado + "\n");

// Ejercicio 5: Concatenar nombres

console.log("---Ejercicio 5: Concatenar nombres--- \n");
function concatenarNombres (nombre, apellido) {
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
}
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let nombreCompleto = concatenarNombres(nombre, apellido);
console.log("Su nombre completo es: " + nombreCompleto + " ✨ \n");

// Ejercicio 6: Convertir horas a minutos

console.log("---Ejercicio 6: Convertir a minutos--- \n");
function convertirHorasAMinutos (horas) {
    let minutos = horas * 60;
    return minutos;
}
let horas = parseInt(prompt("Ingrese la cantidad de horas: "));
let minutos = convertirHorasAMinutos(horas);
console.log(horas + " horas son " + minutos + " minutos ✨ \n");

// Ejercicio 7: Imprimir un mensaje según la hora del día

console.log("---Ejercicio 7: Mensaje según la hora--- \n");
let horaActual = parseFloat(prompt("Ingrese la hora actual hh.mm (formato 24 horas): "));
function mostrarSaludo(hora) {
    if (hora < 12) {
        return "¡Buenos días!✨";
    } else if (hora < 18) {
        return "¡Buenas tardes!✨";
    } else {
        return "¡Buenas noches!✨";
    }
}
let saludo = mostrarSaludo(horaActual);
console.log(saludo + " \n");

// Ejercicio 8: Convertir grados Celsius a Fahrenheit

console.log("---Ejercicio 8: Convertir grados Celsius a Fahrenheit--- \n");
function convertirClesiusAFahrenheit(grados) {
    return (grados * (9/5)) + 32;
}
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let fahrenheit = convertirClesiusAFahrenheit(celsius);
console.log(celsius + "°C equivalen a " + fahrenheit + "°F✨ \n");

// Ejercicio 9: Contar hasta un número dado

console.log("---Ejercicio 9: Contar hasta un número--- \n");
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
    console.log("\n");
}
let num9 = parseInt(prompt("Ingrese un número entero positivo: "));
console.log("✨ Vamos a contar hasta " + num9 + ": ");
contarHasta(num9);

// Ejercicio 10: Factorial de un número

console.log("---Ejercicio 10: Factorial de un número--- \n");
function calcularFactorial(numero) {
    if (numero < 0) {
        return "⚠️  No existe el factorial de un número negativo. \n"; 
    } else if (numero === 0 || numero === 1) {
        return "✨ El factorial de " + numero + " es: " + 1 + " \n"; 
    }else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i; 
        }   
        return "✨ El factorial de " + numero + " es: " + factorial + " \n";
    }
}
let num10 = parseInt(prompt("Ingrese un número entero: "));
console.log(calcularFactorial(num10));