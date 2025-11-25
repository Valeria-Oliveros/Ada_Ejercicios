//Ejercicio 4: Mensaje de despedida personalizado
console.log("\n---Ejercicio 4: Mensaje de despedida personalizado---");

const readline2 = require('readline');
const startMessage = process.env.START_MESSAGE || "¡Bienvenido al Programa!";
console.log(startMessage);
const rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl2.question('📝 Ingresa tu nombre: ', (userName) => {
    console.log(`✨ ¡Gracias por ingresar, ${userName}! ¡Hasta luego!👋🏻`);
    rl2.close();
});
rl2.on('close', () => {
    process.exit(0);
});