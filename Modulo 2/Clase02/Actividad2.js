//Ejercicio 2: Conversión de Objetos JavaScript a JSON
console.log("---Actividad 2: Conversión de Objetos JavaScript a JSON--- \n");

let estudiante = {
    nombre: "Valeria Oliveros",
    edad: 24,
    curso: "Backend",
    notas: [4, 5, 5, 4.5],
};

//A. Convierte el objeto estudiante a una cadena JSON.
let estudianteJSON = JSON.stringify(estudiante);

//B. Muestra la cadena JSON en la consola.
console.log("📝 Cadena JSON del estudiante:", estudianteJSON, "\n");

//C. Convierte la cadena JSON de nuevo a un objeto JavaScript.
let estudianteObjeto = JSON.parse(estudianteJSON);
console.log("✨ Objeto JavaScript del estudiante:", estudianteObjeto, "\n");
