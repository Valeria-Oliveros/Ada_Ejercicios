//---------------------------------------
// Título: Clase 6 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 21/10/2025
// Intitución: Ada ITW 
//---------------------------------------

//Ejercicio 1: Personaliza tu saludo con Node.js
console.log("---Ejercicio 1: Personaliza tu saludo con Node.js---");
require('dotenv').config();

const saludo = process.env.GREETING || "👋🏻 Hola!";
const nombre = process.argv[2] || "Invitado";
console.log(`${saludo}  ${nombre}`);

//Ejercicio 2: Descubre tu entorno de trabajo 
console.log("\n---Ejercicio 2: Descubre tu entorno de trabajo---");

console.log(`📝 Estás trabajando en el sistema operativo: ${process.platform}`);
console.log(`✨ El programa se ejecuta desde el directorio: ${process.cwd()}`);