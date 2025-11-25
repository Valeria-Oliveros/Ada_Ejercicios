//---------------------------------------
// Título: Clase 8 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 28/10/2025
// Intitución: Ada ITW 
//---------------------------------------

const net = require('net');

//Ejercicio 1: Conectar y enviar un mensaje al servidor
console.log("---Ejercicio 1: Conectar y enviar un mensaje al servidor---");

const client = net.createConnection({ port: 5000, host: 'localhost' });
client.on('connect', () => {
    console.log('✅ Conectado al servidor');
    client.write('👋🏻 Hola, servidor! Soy el cliente.');
});
client.on('data', (data) => {
    console.log(`📩 Mensaje del servidor: ${data.toString()}`);
});

//Ejercicio 2: Implementar un timeout para la conexión
console.log("\n---Ejercicio 2: Implementar un timeout para la conexión---");

client.setTimeout(5000, () => {
    console.log('⏰ Timeout: No se pudo conectar al servidor en 5 segundos.');
    client.end();
});

//Ejercicio 3: Pausar y reanudar la recepción de datos
console.log("\n---Ejercicio 3: Pausar y reanudar la recepción de datos---");

client.on('data', (data) => {
    console.log(`📩 Mensaje del servidor: ${data.toString()}`)
    client.pause();
    setTimeout(() => {
        console.log('▶️ Reanudando recepción de datos...');
        client.resume();
    }, 3000);
});

//Ejercicio 4: Manejo de errores en la conexión 
console.log("\n---Ejercicio 4: Manejo de errores en la conexión---");

client.on('error', (err) => {
    console.error(`❌ Error en la conexión: ${err.message}`);
});
client.on('close', () => {
    console.log('🔒 Conexión cerrada');
});

//Ejercicio 5: Manejo de errores en la conexión 
console.log("\n---Ejercicio 5: Manejo de cierre de conexión---");

client.on('end', () => {
    console.log('👋🏻 El servidor ha cerrado la conexión');
});

//Ejercicio 6: Cliente interactivo con la usuaria
console.log("\n---Ejercicio 6: Cliente interactivo con la usuaria---");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function enviarMensaje() {
    readline.question('💬 Escribe un mensaje para el servidor (o "exit" para salir): ', (mensaje) => {
        if (mensaje.toLowerCase() === 'salir') {
            client.end();
            readline.close();
        } else {
            client.write(mensaje);
            enviarMensaje();
        }
    });
}
client.on('connect', enviarMensaje);

//Ejercicio 7: Cliente que destruye el socket al fallar
console.log("\n---Ejercicio 7: Cliente que destruye el socket al fallar---");

client.on('error', (err) => {
    console.error(`❌ Error en la conexión: ${err.message}`);
    client.destroy();
});

//Ejercicio 8: Cliente con unref/ref para control de procesos
console.log("\n---Ejercicio 8: Cliente con unref/ref para control de procesos---");

client.unref();
setTimeout(() => {
    console.log('🔄 Re-referenciando el cliente para mantener el proceso activo.');
    client.ref();
}, 5000);

//Ejercicio 9: Cliente que reconecta automáticamente
console.log("\n---Ejercicio 9: Cliente que reconecta automáticamente---");

function reconectarCliente() {
    setTimeout(() => {
        console.log('🔄 Intentando reconectar al servidor...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

//Ejercicio 10:  Cliente que detecta pérdida de conexión
console.log("\n---Ejercicio 10: Cliente que detecta pérdida de conexión---");

let timeout = setTimeout(() => {
    console.log('⚠️ No se recibieron datos en 10 segundos, posible pérdida de conexión.');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No se recibieron datos en 10 segundos, posible pérdida de conexión.');
        client.end();
    }, 10000);
});