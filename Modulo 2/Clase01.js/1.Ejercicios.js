//---------------------------------------
// Título: Clase 1 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 02/10/2025
// Intitución: Ada ITW 
//---------------------------------------

//Ejercicio 1: ¿Quién puede entrar al parque? 
console.log("---Ejercicio 1: ¿Cuántas personas pueden ingresar al parque?--- \n");
let edades = [10, 15, 25, 8, 60, 45, 12, 61, 30];
function contarPersonas(edades) {
  let contador = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] > 12 && edades[i] < 60) {
      contador++;
    }
  }
  return contador;
}
console.log("📝 Array incial:", JSON.stringify(edades));
console.log("✨ Pueden ingresar", contarPersonas(edades), "personas\n"); // Debería devolver 4

//Ejercicio 2: El menú del día 
console.log("---Ejercicio 2: Platos con el precio menos a $20--- \n");
let menu = {
  "Ensalada": 15,
  "Sopa": 8,
  "Carne": 25,
  "Pasta": 18,
}
function platosBaratos(menu){
  const menuEconomico = [];
  for (let plato in menu){
    if (menu[plato] < 20){
      menuEconomico.push(plato);
    }
  }
  return menuEconomico;
}
console.log("📝 Array incial:", JSON.stringify(menu));
console.log("✨ Los platos serían:", platosBaratos(menu), "\n");

//Ejercicio 3: Ordenando números
console.log("---Ejercicio 3: Ordenando los números de menor a mayor--- \n");
let numeros = [5, 2, 9, 1, 7];
function ordenarNumeros(numeros){
  numeros.sort(function(a,b){
    return a - b;
  });
  return numeros;
}
console.log("📝 Array incial:", JSON.stringify(numeros));
console.log("✨ Números ordenados:", ordenarNumeros(numeros), "\n");

//Ejercicio 4: Contando vocales
console.log("---Ejercicio 4: ¿Cuántas vocales hay?--- \n");
let textoVocales = "Hola Mundo";
function contarVocales(textoVocales){
  let contadorVocales = 0;
  for (let i = 0; i < textoVocales.length; i++){
    let letra = textoVocales[i].toLowerCase();
    if ("aeiou".includes(letra)){
      contadorVocales++;
    }
  }
  return contadorVocales;
}
console.log("📝 Array incial:", JSON.stringify(textoVocales));
console.log("✨ Hay", contarVocales(textoVocales), "vocales en la cadena de texto \n");

//Ejercicio 5: Generador de iniciales
console.log("---Ejercicio 5: Generador de iniciales en mayúsculas--- \n");
let nombre = "Valeria oliveros corredor";
function generarIniciales(nombre){
  let partes = nombre.split(" ");
  let iniciales = "";
  for (let i = 0; i < partes.length; i++){
    let letra = partes[i].charAt(0).toUpperCase();
    iniciales += letra;
  }
  return iniciales;
}
console.log("📝 Array incial:", JSON.stringify(nombre));
console.log("✨ Tus iniciales son:", generarIniciales(nombre), "\n");

//Ejercicio 6: Calculadora de promedio
console.log("---Ejercicio 6: Calcular el promedio de un array de números--- \n");
let calificaciones = [8, 9, 10, 7, 6];
function calcularPromedio(calificaciones){
  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++){
    suma += calificaciones[i];
  }
  let promedio = suma / calificaciones.length;
  return promedio;
}
console.log("📝 Array incial:", JSON.stringify(calificaciones));
console.log("✨ El promedio de calificaciones es:", calcularPromedio(calificaciones), "\n");

//Ejercicio 7: Filtar palabras largas
console.log("---Ejercicio 7: Palabras filtradas con más de 5 caracteres--- \n");
let palabras = ["javascript", "html", "css", "nodejs"];
function filtroPalabras(palabras,longitud){
  return palabras.filter(function(palabra){
    return palabra.length > longitud;
  });
}
console.log("📝 Array incial:", JSON.stringify(palabras));
console.log("✨ Las palabras filtradas son:", filtroPalabras(palabras, 5), "\n");

//Ejercicio 8: Contador de letras 
console.log("---Ejercicio 8: Contador de las veces que aparece la letra en la cadena--- \n");
let textoLetras = "Programar es divertido y retador";
function contarLetra(texto, letra){
  let contadorLetras = 0;
  let letraMinuscula = letra.toLowerCase();
  for (let i = 0; i < texto.length; i++){
    let letraActual = texto[i].toLowerCase();
    if (letraActual === letraMinuscula){
      contadorLetras++;
    }
  }
  return contadorLetras;
}
console.log("📝 Array incial:", JSON.stringify(textoLetras));
console.log("✨ En el texto la letra 'r' aparece:", contarLetra(textoLetras, "r"), "veces \n");

//Ejercicio 9: Números únicos 
console.log("---Ejercicio 9: Nuevo array sin números repetidos--- \n");
let numerosUnicos = [1, 2, 3, 2, 4, 2, 1, 5];
function obtenerNumerosUnicos(numeros){
  let conjunto = new Set(numeros);
  let resultado = [...conjunto];
  return resultado;
}
console.log("📝 Array incial:", JSON.stringify(numerosUnicos));
console.log("✨ Los números sin repetir son:", obtenerNumerosUnicos(numerosUnicos), "\n");

//Ejercicio 10: Invertir palabras
console.log("---Ejercicio 10: Invierte las palabras de tu cadena de texto--- \n");
let frase = "Aprender a programar es divertido";
function invertirFrase(cadena){
  let palabras = cadena.split(" ");
  let palabrasInvertidas = palabras.reverse();
  let resultado = palabrasInvertidas.join(" ");
  return resultado;
}
console.log("📝 Array incial:", JSON.stringify(frase));
console.log("✨ La frase invertida es:", invertirFrase(frase),"\n");