//A. importar el array de estudiantes
const estudiantes = require('./estudiantes');

//B. Mostrar los nombres de los estudiantes
console.log("📝 Nombres de los estudiantes:");
estudiantes.forEach(est=> console.log(`- ${est.nombre}`));

//C. Calcular y mostrar el promedio de notas de cada estudiante
const calcularPromedio = notas => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
const nombreEstudiante = 'Mariana'; // Nombre correspondiente
const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`\n📝 El promedio de ${nombreEstudiante} es: ${promedio.toFixed(2)}`);
} else {
    console.log(`⚠️ Estudiante con nombre ${nombreEstudiante} no encontrado.`);
}

//D. Agregar un nuevo estudiante 
estudiantes.push({ nombre: "Sofía", edad: 22, curso: "Arquitectura", notas: [4.2, 4.6, 4.8] });

//E. Mostrar la lista actualizada de estudiantes
console.log("\n📝 Lista actualizada de estudiantes:");
console.log(JSON.stringify(estudiantes, null, 2));