//Ejercicio 3: Módulos y require
console.log("---Actividad 3: Módulos y require--- \n");

//A. Importar el objeto desde datos.JSON
const datosCurso = require('./datos');

//B. Mostrar la información del curso en la consola.
console.log("📝 Información del curso:");
console.log("Nombre del curso:", datosCurso.nombreCurso);
console.log("Duración:", datosCurso.duracion);
console.log("Temas cubiertos:", datosCurso.temas.join(", "), "\n");