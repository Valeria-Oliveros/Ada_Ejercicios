//---------------------------
// Título: Clase 15
// Autor: Valeria Oliveros
// Fecha: 04/09/2025
// Intitución: Ada ITW
//---------------------------

const prompt = require("prompt-sync")();

// Ejercicio 1: Añadir personajes a una lista

console.log("---Ejercicio 1: Añadir personajes a una lista--- \n");
let personajes = ["link", "zelda"];
while (true) {
    let personaje = prompt("Ingrese el nombre de un personaje ('salir' para terminar): ");    
    if (personaje.toLowerCase() === 'salir') {
        break;
    }
    personajes.push(personaje);
}
console.log("\n✨ Lista de personajes actualizada: ");
console.log(personajes, "\n");


// Ejercicio 2: Eliminar al último invitado

console.log("---Ejercicio 2: Eliminar al último invitado--- \n");
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
console.log("✨ Lista inicial de invitados es: \n", invitados, "\n");
let ultimoInvitado = invitados.pop();
console.log("❌", ultimoInvitado, "❌ Ha sido eliminadx de la lista\n", "\n✨ La lista actual es: \n", invitados, "\n");

// Ejercicio 3: Agregar y eliminar a la fila de mascotas

console.log("---Ejercicio 3: Agregar y eliminar a la fila de mascotas--- \n");
let mascotas = ["perro", "gato", "pez", "conejo", "perico"];
console.log("✨ Lista inicial de mascotas en espera: \n", mascotas, "\n");
let nuevaMascota = prompt("Ingrese el tipo de mascota que acude a urgencia: ");
mascotas.unshift(nuevaMascota);
console.log("\n",nuevaMascota, "⚠️", "  Ha sido ingresado a urgencias", "\n✨ Lista de mascotas actualizada: \n", mascotas, "\n");
let mascotaAtendida = mascotas.shift();
console.log(mascotaAtendida, "✅  Ha sido atendido", "\n✨ La lista actual es: \n", mascotas, "\n");

// Ejercicio 4: Convertir una lista de palabras en una frase

console.log("---Ejercicio 4: Convertir una lista de palabras en una frase--- \n");
let palabras = ["JavaScript", "es", "muy", "divertido"];
let frase1 = palabras.join(" ");
console.log("✨ Lista de palabras: \n", palabras, "\n");
console.log("📝 Frase formada: \n", frase1, "\n");

// Ejercicio 5: Buscar la posición de un elemento

console.log("---Ejercicio 5: Buscar la posición de un elemento--- \n");
let colores = ["rojo", "verde", "azul", "amarillo", "morado"];
let colorBuscado = prompt("Ingrese el nombre de un color a buscar: ").toLowerCase();
let indice = colores.indexOf(colorBuscado);
if (indice !== -1) {
    let correccion = indice + 1;
    console.log("\n✨ El color ", colorBuscado, " se encuentra en la posición ", correccion, " de la lista.\n");
}
else {
    console.log("\n❌ El color ", colorBuscado, " no se encuentra en la lista.\n");
}

// Ejercicio 6: Buscar la última posición de un elemento repetido

console.log("---Ejercicio 6: Buscar la última posición de un elemento repetido--- \n");
let listaNum = [2,5,7,2,8,7,1,3,5,4,6,8,9,1,4,3];
let numBuscado = parseInt(prompt("Ingrese un número a buscar (entre 1 y 9): "));
let ultimaPosicion = listaNum.lastIndexOf(numBuscado);
if (ultimaPosicion !== -1) {
    let correccion = ultimaPosicion + 1;
    console.log("\n✨ El número ", numBuscado, " se encuentra por última vez en la posición ", correccion, " de la lista.\n");
} else {
    console.log("\n❌ El número ", numBuscado, " no se encuentra en la lista.\n");
}

// Ejercicio 7: Verificar si una lista contiene un elemento

console.log("---Ejercicio 7: Verificar si una lista contiene un elemento--- \n");
let listaCom = ["pizza", "hamburguesa", "tacos", "pasta"];
let comidaBuscada = prompt("Ingrese el nombre de una comida a buscar: ").toLowerCase();
if (listaCom.includes(comidaBuscada)) {
    console.log("\n✨ ", comidaBuscada, "✨ Se encuentra en la lista.\n");
}else {
    console.log("\n❌ ", comidaBuscada, "❌ No se encuentra en la lista.\n");
}

// Ejercicio 8: Extraer una parte de una frase

console.log("---Ejercicio 8: Extraer una parte de una frase--- \n");
let frase2 = "Los gatos son geniales";
let parteFrase = frase2.slice(4, 9);
console.log("📝 Frase original: ", frase2);
console.log("✨ Parte extraída: ", parteFrase, "\n");

// Ejercicio 9: Eliminar espacios innecesarios

console.log("---Ejercicio 9: Eliminar espacios innecesarios--- \n");
let fraseConEspacios = "      Hola, mundo!      ";
let fraseSinEspacios = fraseConEspacios.trim();
console.log("📝 Frase sin espacios innecesarios: '" + fraseSinEspacios + "'\n");

// Ejercicio 10: Reemplazar palabras en una frase

console.log("---Ejercicio 10: Reemplazar una palabra en una frase--- \n");
let fraseOriginal = "Me gusta el invierno";
console.log("📝 Frase original: '" + fraseOriginal + "'\n");
let palabraAReemplazar = prompt("Ingrese la palabra que desea reemplazar: ").toLowerCase();
let nuevaPalabra = prompt("Ingrese la nueva palabra: ").toLowerCase();
let fraseModificada = fraseOriginal.replace(palabraAReemplazar, nuevaPalabra);
console.log("\n✨ Frase modificada: '" + fraseModificada + "'\n");

// Ejercicio 11: Gestión de inventario de una tienda - Ejercicio 12: Clasificación de palabras según su longitud - Ejercicio 13: Simulador de una cola de atención al cliente 