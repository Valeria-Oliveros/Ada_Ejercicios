//Ejercicio 5: convierte temperaturas como un profesional
console.log("\n---Ejercicio 5: Convierte temperaturas como un profesional---");

const readline3 = require('readline');
const welcomeMessage = process.env.WELCOME_MESSAGE || "¡Bienvenido al conversor de temperaturas!";
console.log(welcomeMessage);
const rl3 = readline3.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl3.question('📝 Ingresa la temperatura en Celsius: ', (celsius) => {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    console.log(`✨ La temperatura en Fahrenheit es: ${fahrenheit}°F`);
    rl3.close();
});
rl3.on('close', () => {
    console.log('¡Gracias por usar el conversor de temperaturas!👋🏻');
    process.exit(0);
});