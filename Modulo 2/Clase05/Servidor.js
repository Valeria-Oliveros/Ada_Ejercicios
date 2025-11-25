//---------------------------------------
// Título: Clase 5 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 16/10/2025
// Intitución: Ada ITW 
//---------------------------------------

//Ejercicios: 
// Crear el servidor básico
// Detectar conexiones de clientes 
// Recibir y mostrar datos del cliente
// Responder al cliente
// Detectar cuando el cliente se desconecta 

const PORT = 5000;
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    socket.on('data', (data) => {
        const mensaje = data.toString();
        console.log('✨ Mensaje del cliente recibido: ${mensaje}');
        const respuesta = 'Hola 👋🏻 Tu mensaje fue recibido correctamente!\n';
        socket.write(respuesta);
    });

    socket.on('end', () => {
        console.log('⚠️ Cliente desconectado');
    });
});

server.listen(PORT, () => {
    console.log('✅ Servidor escuchando en el puerto ${PORT}');
});
