//---------------------------------------
// Título: Clase 2 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 07/10/2025
// Intitución: Ada ITW 
//---------------------------------------

//Ejercicio1: Crea un objeto JSON que represente un libro.

console.log("---Actividad 1: Objeto JSON de un libro--- \n");
let libro = {
    titulo: "Percy Jackson y el ladrón del rayo",
    autor: "Rick Riordan",
    anio: 2005,
    genero: "Fantasía",
};

//A. Mostrar el titulo y el autor en consola.
console.log("📝 Título:", libro.titulo);
console.log("📝 Autor:", libro.autor, "\n");

//B. Actualizar el año del libro a un valor más reciente
libro.anio = 2025;

// C - Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
libro.páginas = 417;

// D - Muestra el objeto actualizado en la consola.
console.log("✨ Objeto libro actualizado:", libro, "\n");