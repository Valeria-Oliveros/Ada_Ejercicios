//---------------------------------------
// Título: Clase 7 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 23/10/2025
// Intitución: Ada ITW 
//---------------------------------------

const net = require('net');
const fs = require('fs');

//Ejercicio 1: Servidor de ECO
console.log("---Ejercicio 1: Servidor de ECO---");

const ecoserver = net.createServer((socket) => {
    console.log('✅ Cliente conectado');
    socket.on('data', (data) => {
        console.log('📨 Mensaje recibido:', data.toString());
        socket.write(data);;
    });
    socket.on('end', () => {
        console.log('❌ Cliente desconectado');
    });
    socket.on('close', (err) => {
        console.log('❌ Conexión cerrada', err);
    });
});

ecoserverserver.listen(3000, () => {
    console.log('🚀 Servidor escuchando en el puerto 3000\n');
});

//Ejercicio 2: Servidor de Timeout
console.log("---Ejercicio 2: Servidor de Timeout---");

const timeoutServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de timeout');
    socket.setTimeout(10000);
    socket.on('timeout', () => {
        console.log('⏰ Tiempo de espera excedido, cerrando conexión');
        socket.end();
    });
    socket.on('data', (data) => {
        console.log('📨 Mensaje recibido:', data.toString());
        socket.setTimeout(10000);
    });
});

timeoutServer.listen(3001, () => {
    console.log('🚀 Servidor de timeout escuchando en el puerto 3001\n');
});

//Ejercicio 3: Servidor de Mensajes personalizados
console.log("---Ejercicio 3: Servidor de Mensajes personalizados---");

const mensajeServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de mensajes personalizados');
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        if (mensaje.toLowerCase() === 'hola') {
            socket.write('✨ ¡Bienvenido! ✨\n');
        } else if (mensaje.toLowerCase() === 'adios') {
            socket.write('👋🏻 ¡Adiós! Que tengas un buen día.\n');
            socket.end();
        } else {
            socket.write(`Has dicho: ${mensaje}\n`);
        }
    });
});

mensajeServer.listen(3002, () => {
    console.log('🚀 Servidor de mensajes personalizados escuchando en el puerto 3002\n');
});

//Ejercicio 4: Servidor de Manejor de Errores
console.log("---Ejercicio 4: Servidor de Manejor de Errores---");

const errorServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de manejo de errores');
    socket.on('error', (err) => {
        console.error('❌ Error en la conexión:', err.message);
        socket.destroy();
    });
});

errorServer.listen(3003, () => {
    console.log('🚀 Servidor de manejo de errores escuchando en el puerto 3003\n');
});

//Ejercicio 5: Servidor con Contador de Conexiones
console.log("---Ejercicio 5: Servidor con Contador de Conexiones---");

let connectionCount = 0;
const contadorServer = net.createServer((socket) => {
    connectionCount++;
    console.log(`✅ Cliente conectado. Total de conexiones: ${connectionCount}`);   
    socket.write("✨ Bienvenido al servidor con contador de conexiones. Eres el cliente número " + connectionCount + "\n");
    socket.on('close', () => {
        connectionCount--;
        console.log(`❌ Cliente desconectado. Total de conexiones: ${connectionCount}`);
    });
});
contadorServer.listen(3004, () => {
    console.log('🚀 Servidor con contador de conexiones escuchando en el puerto 3004\n');
});

//Ejercicio 6: Servidor de Comandos 
console.log("---Ejercicio 6: Servidor de Comandos---");

const comandoServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de comandos');    
    socket.on('data', (data) => {
        const comando = data.toString().trim();
        switch (comando) {
            case 'Fecha':
                socket.write(`📅 Fecha actual: ${new Date().toLocaleDateString()}\n`);
                break;
            case 'Hora':
                socket.write(`⏰ Hora actual: ${new Date().toLocaleTimeString()}\n`);   
                break;
            case 'Salir':
                socket.write('👋🏻 ¡Adiós! Cerrando conexión.\n');
                socket.end();
                break;
            default:
                socket.write('❓ Comando no reconocido. Usa "Fecha", "Hora" o "Salir".\n');
        }
    });
    socket.on('end', () => {
        console.log('❌ Cliente desconectado del servidor de comandos');
    });
});
comandoServer.listen(3005, () => {
    console.log('🚀 Servidor de comandos escuchando en el puerto 3005\n');
});

//Ejercicio 7: Servidor de Chat Grupal
console.log("---Ejercicio 7: Servidor de Chat Grupal---");

const clientes = [];
const chatServer = net.createServer((socket) => {
    clientes.push(socket);
    console.log('✅ Nuevo cliente conectado al chat grupal');
    socket.write('✨ Bienvenido al chat grupal. Escribe tu mensaje y será enviado a todos los participantes.\n');
    clientes.forEach((cliente) => {
        if (cliente !== socket) {
            cliente.write('🔔 Nuevo participante se ha unido al chat.\n');
        }
    });
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        clientes.forEach((cliente) => {
            if (cliente !== socket) {
                cliente.write(`💬 Mensaje: ${mensaje}\n`);
            }
        });
    });
    socket.on('end', () => {
        clientes.splice(clientes.indexOf(socket), 1);
        console.log('❌ Cliente desconectado del chat grupal');
        clientes.forEach((cliente) => {
            cliente.write('🔔 Un participante ha salido del chat.\n');
        });
    });
});
chatServer.listen(3006, () => {
    console.log('🚀 Servidor de chat grupal escuchando en el puerto 3006\n');
});

//Ejercicio 8: Servidor con Autenticación simple
console.log("---Ejercicio 8: Servidor con Autenticación simple---");

const authServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de autenticación');
    let authenticated = false;
    socket.write('🔐 Por favor, ingresa tu contraseña:\n');
    socket.on('data', (data) => {
        if (!authenticated) {
            const password = data.toString().trim();
            if (password === 'usuario:clave123') {
                authenticated = true;
                socket.write('✅ Autenticación exitosa. Bienvenido al servidor.\n');
            } else {
                socket.write('❌ Contraseña incorrecta. Cerrando conexión...\n');
                socket.end();
            }
        } else {
            const mensaje = data.toString().trim();
            socket.write(`💬 Mensaje recibido: ${mensaje}\n`);
        }
    });
    socket.on('end', () => {
        console.log('❌ Cliente desconectado del servidor de autenticación');
    });
});
authServer.listen(3007, () => {
    console.log('🚀 Servidor de autenticación escuchando en el puerto 3007\n');
});

//Ejercicio 9: Servidor de Transferencia de Archivos
console.log("---Ejercicio 9: Servidor de Transferencia de Archivos---");

const fileServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor de transferencia de archivos');
    let fileData = Buffer.alloc(0);
    let fileSize = 0;
    socket.on('data', (data) => {
        fileData = Buffer.concat([fileData, data]);
        fileSize += data.length;
        if (fileSize >= 1048576) {
            socket.write('✅ Archivo recibido correctamente. Gracias por usar el servidor de transferencia de archivos.\n');
            socket.end();
            return;
        }
        socket.write(`📦 Recibidos ${fileSize} bytes hasta ahora...\n`);
    });
    socket.on('end', () => {
        if (fileSize <= 1048576) {
            fs.writeFileSync('archivo_recibido', fileData, (err) => {
                if (err) {
                    console.error('❌ Error al crear el respaldo de tus metas:', err);
                } else {
                    console.log("✅ Archivo guardado correctamente\n");
                    socket.write("✅ Archivo guardado correctamente en el servidor.\n"); 
                }
            });
        }
    });
    socket.on('error', (err) => {
        console.error('❌ Error en la conexión de transferencia de archivos:', err.message);
    });
});
fileServer.listen(3008, () => {
    console.log('🚀 Servidor de transferencia de archivos escuchando en el puerto 3008\n');
});
    
//Ejercicio 10: Servidor con Historial de Mensajes
console.log("---Ejercicio 10: Servidor con Historial de Mensajes---");

const historialServer = net.createServer((socket) => {
    console.log('✅ Cliente conectado al servidor con historial de mensajes');
    const historial = [];
    if (historial.length > 0) {
        socket.write('📜 Historial de mensajes anteriores:\n');
        historial.forEach((msg, index) => {
            socket.write(`${index + 1}: ${msg}\n`);
        });
    } else {
        socket.write('📜 No hay mensajes en el historial.\n');
    }
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        historial.push(mensaje);
        if (historial.length > 10) {
            historial.shift();
        }
        socket.write(`💬 Mensaje recibido y guardado en el historial: ${mensaje}\n`);
    });
    socket.on('end', () => {
        console.log('❌ Cliente desconectado del servidor con historial de mensajes');
    });
});
historialServer.listen(3009, () => {
    console.log('🚀 Servidor con historial de mensajes escuchando en el puerto 3009\n');
});
