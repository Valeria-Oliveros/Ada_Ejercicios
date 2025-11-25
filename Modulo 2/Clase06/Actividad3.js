//Ejercicio 3: Sumemos dos números
console.log("\n---Ejercicio 3: Sumemos dos números---");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('📝 Ingresar el primer número: ', (num1) => {
    rl.question('📝 Ingresar el segundo número: ', (num2) => {
        const suma = parseFloat(num1) + parseFloat(num2);
        console.log(`✨ La suma de ${num1} + ${num2} es: ${suma}`);
        rl.close();
    });
});
rl.on('close', () => {
    console.log('¡Gracias por usar el sumador de números!👋🏻');
    process.exit(0);
});