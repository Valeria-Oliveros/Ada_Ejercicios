//---------------------------------------
// Título: Clase 3 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 09/10/2025
// Intitución: Ada ITW 
//---------------------------------------

const fs = require('fs');

//Ejercicio 1: Registro de libros favoritos
console.log("---Ejercicio 1: Registro de libros favoritos--- \n");
const filePathLibros = './libros.json';

const leerLibros = () => {
    if (!fs.existsSync(filePathLibros)) {
        fs.writeFileSync(filePathLibros, '[]');
    }
    const contenido = fs.readFileSync(filePathLibros, 'utf-8');
    return JSON.parse(contenido);
};

const escribirLibros = (libros) => {    
    fs.writeFileSync(filePathLibros, JSON.stringify(libros, null, 2));
};

const agregarLibro = (nombreLibro) => {
    const libros = leerLibros();
    libros.push({ id: libros.length + 1, nombre: nombreLibro });
    escribirLibros(libros);
    console.log(`✨ Libro "${nombreLibro}" agregado al registro.`);
} 

const listarLibros = () => {
    const libros = leerLibros();
    console.log("📝 Libros favoritos registrados:");
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`);
    });
};

agregarLibro("Percy Jackson y el ladrón del rayo");
listarLibros();

//Ejercicio 2: Seguimiento de series de TV
console.log("\n---Ejercicio 2: Seguimiento de series de TV--- \n");
const filePathSeries = './series.json';

const leerSeries = () => {
    if (!fs.existsSync(filePathSeries)) {
        fs.writeFileSync(filePathSeries, '[]');
    }
    const contenido = fs.readFileSync(filePathSeries, 'utf-8');
    return JSON.parse(contenido);
};

const escribirSeries = (series) => {    
    fs.writeFileSync(filePathSeries, JSON.stringify(series, null, 2));
};

const agregarSerie = (nombreSerie, temporadas) => {
    const series = leerSeries();
    series.push({ id: series.length + 1, nombre: nombreSerie, temporadas: temporadas });
    escribirSeries(series);
    console.log(`✨ Serie "${nombreSerie}" agregada al seguimiento.`);
};

const listarSeries = () => {
    const series = leerSeries();
    console.log("📝 Series de TV en seguimiento:");
    series.forEach(serie => {
        console.log(`${serie.id}. ${serie.nombre} - Temporadas: ${serie.temporadas}`);
    });
};

const actualizarSerie = (id, nuevasTemporadas) => {
    const series = leerSeries();
    const serie = series.find(s => s.id === id);
    if (serie) {
        serie.temporadas = nuevasTemporadas;
        escribirSeries(series);
        console.log(`✨ Serie "${serie.nombre}" actualizada a ${nuevasTemporadas} temporadas.`);
    } else {
        console.log(`⚠️ Serie con ID ${id} no encontrada.`);
    }
};

agregarSerie("Stranger Things", 4);
listarSeries();
actualizarSerie(1, 5);
listarSeries();

//Ejercicio 3: Registro de tareas pendientes
console.log("\n---Ejercicio 3: Registro de tareas pendientes--- \n");
const filePathTareas = './tareas.json';

const leerTareas = () => {
    if (!fs.existsSync(filePathTareas)) {
        fs.writeFileSync(filePathTareas, '[]');
    }   
    const contenido = fs.readFileSync(filePathTareas, 'utf-8');
    return JSON.parse(contenido);
};

const escribirTareas = (tareas) => {    
    fs.writeFileSync(filePathTareas, JSON.stringify(tareas, null, 2));
};

const agregarTarea = (descripcion) => {
    const tareas = leerTareas();
    tareas.push({ id: tareas.length + 1, descripcion: descripcion, completada: false });
    escribirTareas(tareas);
    console.log(`✨ Tarea "${descripcion}" agregada a la lista.`);
};

const listarTareas = () => {
    const tareas = leerTareas();
    console.log("📝 Tareas pendientes:");
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. [${tarea.completada ? 'X' : ' '}] ${tarea.descripcion}`);
    });
};

const eliminarTarea = (id) => {
    let tareas = leerTareas();
    tareas = tareas.filter(t => t.id !== id);
    escribirTareas(tareas);
    console.log(`✨ Tarea con ID ${id} eliminada de la lista.`);
};

agregarTarea("Comprar regalo de cumpleaños");
listarTareas();
eliminarTarea(1);
listarTareas();

//Ejercicio 4: Control de inventario
console.log("\n---Ejercicio 4: Control de inventario--- \n");
const filePathInventario = './inventario.json';

const leerInventario = () => {
    if (!fs.existsSync(filePathInventario)) {
        fs.writeFileSync(filePathInventario, '[]');
    }
    const contenido = fs.readFileSync(filePathInventario, 'utf-8');
    return JSON.parse(contenido);
};

const escribirInventario = (inventario) => {    
    fs.writeFileSync(filePathInventario, JSON.stringify(inventario, null, 2));
};

const agregarProducto = (nombreProducto, cantidad) => {
    const inventario = leerInventario();
    inventario.push({ id: inventario.length + 1, nombre: nombreProducto, cantidad: cantidad });
    escribirInventario(inventario);
    console.log(`✨ Producto "${nombreProducto}" agregado al inventario.`);
};

const listarInventario = () => {
    const inventario = leerInventario();
    console.log("📝 Inventario de productos:");
    inventario.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - Cantidad: ${producto.cantidad}`);
    });
};

const actualizarInventario = (id, nuevaCantidad) => {
    const inventario = leerInventario();
    const producto = inventario.find(p => p.id === id); 
    if (producto) {
        producto.cantidad = nuevaCantidad;
        escribirInventario(inventario);
        console.log(`✨ Producto "${producto.nombre}" actualizado a cantidad ${nuevaCantidad}.`);
    } else {
        console.log(`⚠️ Producto con ID ${id} no encontrado.`);
    }
};

agregarProducto("Cartulinas", 50);
listarInventario();
actualizarInventario(1, 20);
listarInventario();

//Ejercicio 5: Registro de contactos
console.log("\n---Ejercicio 5: Registro de contactos--- \n");
const filePathContactos = './contactos.json';

const leerContactos = () => {
    if (!fs.existsSync(filePathContactos)) {
        fs.writeFileSync(filePathContactos, '[]');
    }
    const contenido = fs.readFileSync(filePathContactos, 'utf-8');
    return JSON.parse(contenido);
};

const escribirContactos = (contactos) => {    
    fs.writeFileSync(filePathContactos, JSON.stringify(contactos, null, 2));
};

const agregarContacto = (nombreContacto, telefono, correo) => {
    const contactos = leerContactos();
    contactos.push({ id: contactos.length + 1, nombre: nombreContacto, telefono: telefono, correo: correo });
    escribirContactos(contactos);
    console.log(`✨ Contacto "${nombreContacto}" agregado al registro.`);
};

const listarContactos = () => {
    const contactos = leerContactos();
    console.log("📝 Contactos registrados:");
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre} - Teléfono: ${contacto.telefono}, correo: ${contacto.correo}`);
    });
};

const eliminarContacto = (id) => {
    let contactos = leerContactos();
    contactos = contactos.filter(c => c.id !== id);
    escribirContactos(contactos);
    console.log(`✨ Contacto con ID ${id} eliminado del registro.`);
};

agregarContacto("Andrea Oliveros", "123-456-7890", "Aoli1507@gmail.com");
listarContactos();
eliminarContacto(1);
listarContactos();

//Ejercicio 6: Gestión de un diario personal
console.log("\n---Ejercicio 6: Gestión de un diario personal--- \n");
const filePathDiario = './diario.json';

const leerDiario = () => {
    if (!fs.existsSync(filePathDiario)) {
        fs.writeFileSync(filePathDiario, '[]');
    }   
    const contenido = fs.readFileSync(filePathDiario, 'utf-8');
    return JSON.parse(contenido);
};

const escribirDiario = (entradas) => {    
    fs.writeFileSync(filePathDiario, JSON.stringify(entradas, null, 2));
};

const agregarEntrada = (contenido) => {
    const entradas = leerDiario();
    const fecha = new Date().toLocaleDateString();
    entradas.push({ id: entradas.length + 1, fecha: fecha, contenido: contenido });
    escribirDiario(entradas);
    console.log(`✨ Entrada para el ${fecha} agregada al diario.`);
};

const listarEntradas = () => {
    const entradas = leerDiario();
    console.log("📝 Entradas del diario:");
    entradas.forEach(entrada => {
        console.log(`${entrada.id}. [${entrada.fecha}] ${entrada.contenido}`);
    });
};

const eliminarEntrada = (id) => {
    let entradas = leerDiario();
    entradas = entradas.filter(e => e.id !== id);
    escribirDiario(entradas);
    console.log(`✨ Entrada con ID ${id} eliminada del diario.`);
};

agregarEntrada("Hoy fue un día increíble, aprendí mucho en mi clase.");
listarEntradas();
eliminarEntrada(1);
listarEntradas();

//Ejercicio 7: Control de tareas diarias
console.log("\n---Ejercicio 7: Control de tareas diarias--- \n");
const filePathTareasDiarias = './tareasDiarias.json';   

const leerTareasDiarias = () => {
    if (!fs.existsSync(filePathTareasDiarias)) {
        fs.writeFileSync(filePathTareasDiarias, '[]');
    }
    const contenido = fs.readFileSync(filePathTareasDiarias, 'utf-8');
    return JSON.parse(contenido);
};

const escribirTareasDiarias = (tareas) => {    
    fs.writeFileSync(filePathTareasDiarias, JSON.stringify(tareas, null, 2));
};

const agregarTareaDiaria = (descripcion) => {
    const tareas = leerTareasDiarias();
    tareas.push({ id: tareas.length + 1, descripcion: descripcion, completada: false });
    escribirTareasDiarias(tareas);
    console.log(`✨ Tarea diaria "${descripcion}" agregada.`);
};

const listarTareasDiarias = () => {
    const tareas = leerTareasDiarias();
    console.log("📝 Tareas diarias:");
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. [${tarea.completada ? 'X' : ' '}] ${tarea.descripcion}`);
    });
};

const completarTareaDiaria = (id) => {
    const tareas = leerTareasDiarias();
    const tarea = tareas.find(t => t.id === id);    
    if (tarea) {
        tarea.completada = true;
        escribirTareasDiarias(tareas);
        console.log(`✨ Tarea diaria "${tarea.descripcion}" marcada como completada.`);
    } else {
        console.log(`⚠️ Tarea diaria con ID ${id} no encontrada.`);
    }
};

agregarTareaDiaria("Ir al GYM por la mañana");
listarTareasDiarias();
completarTareaDiaria(1);
listarTareasDiarias();

//Ejercicio 8: Seguimiento de proyectos
console.log("\n---Ejercicio 8: Seguimiento de proyectos--- \n");
const filePathProyectos = './proyectos.json';

const leerProyectos = () => {
    if (!fs.existsSync(filePathProyectos)) {
        fs.writeFileSync(filePathProyectos, '[]');
    }
    const contenido = fs.readFileSync(filePathProyectos, 'utf-8');
    return JSON.parse(contenido);
};

const escribirProyectos = (proyectos) => {    
    fs.writeFileSync(filePathProyectos, JSON.stringify(proyectos, null, 2));
};

const agregarProyecto = (nombreProyecto, descripcion) => {
    const proyectos = leerProyectos();
    proyectos.push({ id: proyectos.length + 1, nombre: nombreProyecto, descripcion: descripcion, estado: 'En progreso' });
    escribirProyectos(proyectos);
    console.log(`✨ Proyecto "${nombreProyecto}" agregado al seguimiento.`);
};  

const listarProyectos = () => {
    const proyectos = leerProyectos();
    console.log("📝 Proyectos en seguimiento:");
    proyectos.forEach(proyecto => {
        console.log(`${proyecto.id}. ${proyecto.nombre} - Descripción: ${proyecto.descripcion} - Estado: ${proyecto.estado}`);
    });
};

const actualizarProyecto = (id, nuevoEstado) => {
    const proyectos = leerProyectos();
    const proyecto = proyectos.find(p => p.id === id);
    if (proyecto) {
        proyecto.estado = nuevoEstado;
        escribirProyectos(proyectos);
        console.log(`✨ Proyecto "${proyecto.nombre}" actualizado a estado "${nuevoEstado}".`);
    } else {
        console.log(`⚠️ Proyecto con ID ${id} no encontrado.`);
    }
};

agregarProyecto("Desarrollo de sitio web", "Crear un sitio web para una tienda en línea.");
listarProyectos();
actualizarProyecto(1, "Completado");
listarProyectos();

//Ejercicio 9: Registro de eventos
console.log("\n---Ejercicio 9: Registro de eventos--- \n");
const filePathEventos = './eventos.json';

const leerEventos = () => {
    if (!fs.existsSync(filePathEventos)) {
        fs.writeFileSync(filePathEventos, '[]');
    }
    const contenido = fs.readFileSync(filePathEventos, 'utf-8');    
    return JSON.parse(contenido);
};

const escribirEventos = (eventos) => {    
    fs.writeFileSync(filePathEventos, JSON.stringify(eventos, null, 2));
};

const agregarEvento = (nombreEvento, fecha, lugar) => {
    const eventos = leerEventos();
    eventos.push({ id: eventos.length + 1, nombre: nombreEvento, fecha: fecha, lugar: lugar });
    escribirEventos(eventos);
    console.log(`✨ Evento "${nombreEvento}" agregado al registro.`);
};

const listarEventos = () => {
    const eventos = leerEventos();
    console.log("📝 Eventos registrados:");
    eventos.forEach(evento => {
        console.log(`${evento.id}. ${evento.nombre} - Fecha: ${evento.fecha} - Lugar: ${evento.lugar}`);
    });
};

const eliminarEvento = (id) => {
    let eventos = leerEventos();
    eventos = eventos.filter(e => e.id !== id);
    escribirEventos(eventos);
    console.log(`✨ Evento con ID ${id} eliminado del registro.`);
};

agregarEvento("BTS Gira mundial", "06-09-2026", "Estadio Metropolitano");
listarEventos();
eliminarEvento(1);
listarEventos();

//Ejercicio 10: Gestión de compras
console.log("\n---Ejercicio 10: Gestión de compras--- \n");
const filePathCompras = './compras.json';

const leerCompras = () => {
    if (!fs.existsSync(filePathCompras)) {
        fs.writeFileSync(filePathCompras, '[]');
    }
    const contenido = fs.readFileSync(filePathCompras, 'utf-8');
    return JSON.parse(contenido);
};

const escribirCompras = (compras) => {    
    fs.writeFileSync(filePathCompras, JSON.stringify(compras, null, 2));
};

const agregarCompra = (item, precio) => {
    const compras = leerCompras();
    compras.push({ id: compras.length + 1, item: item, precio: precio });
    escribirCompras(compras);
    console.log(`✨ Compra de "${item}" agregada a la lista.`);
};

const listarCompras = () => {
    const compras = leerCompras();
    console.log("📝 Lista de compras:");
    compras.forEach(compra => {
        console.log(`${compra.id}. ${compra.item} - Precio: $${compra.precio}`);
    });
};

const eliminarCompra = (id) => {
    let compras = leerCompras();
    compras = compras.filter(c => c.id !== id);
    escribirCompras(compras);
    console.log(`✨ Compra con ID ${id} eliminada de la lista.`);
};

agregarCompra("Ipad", 3500000);
listarCompras();
eliminarCompra(1);
listarCompras();