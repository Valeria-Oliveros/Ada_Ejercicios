//---------------------------
// Título: Clase 16
// Autor: Valeria Oliveros
// Fecha: 10/09/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require("prompt-sync")();

// Ejercicio 1: Crea un nuevo array con los cuadrados de los números

console.log("---Ejercicio 1: Crea un nuevo array con los cuadrados de los números--- \n");
let listaNumeros = [2,4,6,8];
let listaCuadrados = [];
for (let i = 0; i < listaNumeros.length; i++) {
    listaCuadrados.push(listaNumeros[i] ** 2);
}
console.log("📝 Lista de números iniciales: " + listaNumeros);   
console.log("✨ Lista de cuadrados: " + listaCuadrados + "\n");

// Ejercicio 2: Filtra los números pares de una lista

console.log("---Ejercicio 2: Filtra los números pares de una lista--- \n");
let lista2Numeros = [1,2,3,4,5,6];
let listaPares = [];
for (let i = 0; i < lista2Numeros.length; i++) {
    if (lista2Numeros[i] % 2 === 0) {
        listaPares.push(lista2Numeros[i]);
    }
}   
console.log("📝 Lista de números iniciales: " + lista2Numeros);
console.log("✨ Lista de números pares: " + listaPares + "\n");


// Ejercicio 3: Encuenta el primer número mayor a 10

console.log("---Ejercicio 3: Encuenta el primer número mayor a 10--- \n");
let lista3Numeros = [5,8,12,20,3];
let primerMayorDiez = null;
for (let i = 0; i < lista3Numeros.length; i++) {
    if (lista3Numeros[i] > 10) {
        primerMayorDiez = lista3Numeros[i];
        break;
    }   
}
console.log("📝 Lista de números iniciales: " + lista3Numeros);
console.log("✨ Primer número mayor a 10 en la lista es: " + primerMayorDiez + "\n");

// Ejercicio 4: Calcula la suma total de los números

console.log("---Ejercicio 4: Calcula la suma total de los números--- \n");
let lista4Numeros = [1,2,3,4];
let sumaTotal = 0;
for (let i = 0; i < lista4Numeros.length; i++) {
    sumaTotal += lista4Numeros[i];
}
console.log("📝 Lista de números iniciales: " + lista4Numeros);
console.log("✨ La suma total de los números en la lista es: " + sumaTotal + "\n");


// Ejercicio 5: Recorre una lista e imprime cada elemento 

console.log("---Ejercicio 5: Recorre una lista e imprime cada elemento--- \n");
let lista5Numeros = ['manzana', 'banana', 'cereza'];
console.log("📝 Lista de frutas iniciales: " + lista5Numeros);
console.log("✨ Elementos de la lista:");
for (let i = 0; i < lista5Numeros.length; i++) {
    console.log(lista5Numeros[i]);
}
console.log("\n");

// Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 

console.log("---Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra --- \n");
let listaPalabras = ['hola', 'mundo', 'javascript'];
let palabrasModificadas = [];
for (let i = 0; i < listaPalabras.length; i++) {
    palabrasModificadas.push("¡" + listaPalabras[i] + "!");
}
console.log("📝 Lista de palabras iniciales: " + listaPalabras);
console.log("✨ Lista de palabras modificadas: " + palabrasModificadas + "\n");

// Ejercicio 7: Filtra nombres que empiecen con la letra 'A' 

console.log("---Ejercicio 7: Filtra nombres que empiecen con la letra 'A'--- \n");
let listaNombres = ['Ana', 'Luis', 'Andrea', 'Marta'];
let nombresConA = [];
for (let i = 0; i < listaNombres.length; i++) {
    if (listaNombres[i].startsWith('A')) {  
        nombresConA.push(listaNombres[i]);
    }
}
console.log("📝 Lista de nombres iniciales: " + listaNombres);
console.log("✨ Nombres que empiezan con 'A': " + nombresConA + "\n");

// Ejercicio 8: Busca un nombre específico

console.log("---Ejercicio 8: Busca un nombre específico --- \n");
let lista2Nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let nombreBuscado = prompt("Ingresa el nombre que deseas buscar: ");
let encontrado = lista2Nombres.find(nombre => nombre === nombreBuscado);
if (encontrado) {
    console.log("✨ El nombre " + nombreBuscado + " fue encontrado en la lista.\n");
} else {
    console.log("❌ El nombre " + nombreBuscado + " no se encuentra en la lista.\n");
}

// Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras

console.log("---Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras--- \n");
let lista2Palabras = ['sol', 'luna', 'estrella'];
let totalLetras = lista2Palabras.reduce((acum, palabra) => acum + palabra.length, 0);
console.log("📝 Lista de palabras iniciales: " + lista2Palabras);
console.log("✨ La cantidad total de letras en la lista es: " + totalLetras + "\n");


// Ejercicio 10: Construye una frase a partir de una lista de palabras

console.log("---Ejercicio 10: Construye una frase a partir de una lista de palabras--- \n");
let lista3Palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
let frase = lista3Palabras.join(' ');
console.log("📝 Lista de palabras iniciales: " + lista3Palabras);
console.log("✨ Frase construida: '" + frase + "'\n");

// Ejercicio 11: Encuentra los nombres más cortos y transforma su formato - Ejercicio 12: Calcula el total de ventas de productos seleccionados - Ejercicio 13: Encuentra la película más corta y analiza los títulos largos