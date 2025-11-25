//---------------------------------------
// Título: Clase 4 - Modulo 2 - Backend
// Autor: Valeria Oliveros
// Fecha: 14/10/2025
// Intitución: Ada ITW 
//---------------------------------------

const fs = require('fs');

//Ejercicio 1: Crea tu perfil digital
console.log("---Ejercicio 1: Crea tu perfil digital---");

const perfil = {
    nombre: "Valeria Oliveros",
    edad: 23,
    ciudadFavorita: "Corea del sur",
};

fs.writeFileSync('perfil.json', JSON.stringify(perfil, null, 2), (err) => {
    if (err) {
        console.error('❌ Error al guardar el perfil:', err);
    } else {
        console.log('✅ Perfil guardado exitosamente en perfil.json\n');
    }
});

//Ejercicio 2: Descrubre tu perfil
console.log("---Ejercicio 2: Descrubre tu perfil---");

fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer el perfil:', err);
    } else {
        const perfilLeido = JSON.parse(data);
        console.log('📝 Perfil leído desde perfil.json:', perfilLeido, '\n');
    }
});

//Ejercicio 3: Actualiza tu estilo
console.log("---Ejercicio 3: Actualiza tu estilo---");

fs.readFile('perfil.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer el perfil para actualizar:', err);
    } else {
        const perfilActualizado = JSON.parse(data);
        perfilActualizado.hobby = "Leer";
        fs.writeFileSync('perfil.json', JSON.stringify(perfilActualizado, null, 2), (err) => {
            if (err) {
                console.error('❌ Error al actualizar el perfil:', err);
            } else {
                console.log('✅ Perfil actualizado exitosamente con un nuevo hobby\n');
            }
        });
    }
});

//Ejercicio 4: Existe tu perfil?
console.log("---Ejercicio 4: Existe tu perfil?---");

if (fs.existsSync('perfil.json')) {
    console.log('✨ Tu perfil ya existe en el directorio actual.\n');
} else {
    const perfilNuevo = {
        nombre: "Mariana Sanabria",
        edad: 19,
        ciudadFavorita: "Londres",
    };
    fs.writeFileSync('perfil.json', JSON.stringify(perfilNuevo, null, 2), (err) => {
        if (err) {
            console.error('❌ Error al crear el perfil:', err);
        } else {
            console.log('✅ Perfil creado exitosamente\n');
        }
    });
}

//Ejercicio 5: Despidete de tu perfil
console.log("---Ejercicio 5: Despidete de tu perfil---");

if (fs.existsSync('perfil.json')) {
    fs.unlinkSync('perfil.json', (err) => {
        if (err) {
            console.error('❌ Error al eliminar el perfil:', err);
        } else {
            console.log('✅ Perfil eliminado exitosamente\n');
        }
    });
} else {
    console.log('⚠️ No se encontró el perfil para eliminar.\n');
}

//Ejercicio 6: Tu lista de metas
console.log("---Ejercicio 6: Tu lista de metas--- \n");

let metas =[];
metas.push("Aprender Node.js");
metas.push("Viajar a Corea del Sur");
metas.push("Hacer más ejercicio");

fs.writeFileSync('metas.json', JSON.stringify(metas, null, 2), (err) => {
    if (err) {
        console.error('❌ Error al crear tu lista de metas:', err);
    } else {
        console.log('✅ Lista de metas creada exitosamente\n');
    }
});

//Ejercicio 7: Encuentra tu meta perdida
console.log("---Ejercicio 7: Encuentra tu meta perdida--- \n");

const metaBuscada = "Viajar a Corea del Sur";

fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer la lista de metas:', err);
    } else {
        let metasLeidas = JSON.parse(data);
        if (metasLeidas.includes(metaBuscada)) {
            console.log(`✨ ¡Has encontrado tu meta!: "${metaBuscada}"\n`);
        } else {
            metaBuscada.push(metaBuscada);
            fs.writeFileSync('metas.json', JSON.stringify(metasLeidas, null, 2), (err) => {
                if (err) {
                    console.error('❌ Error al agregar la meta perdida:', err);
                } else {
                    console.log(`✅ Meta "${metaBuscada}" agregada a tu lista de metas\n`);
                }
            });
        }
    }
});

//Ejercicio 8: Cuenta tus metas
console.log("---Ejercicio 8: Cuenta tus metas--- \n");

fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer la lista de metas para contar:', err);  
    } else {
        const metasLeidas = JSON.parse(data);
        console.log(`✨ Tienes un total de ${metasLeidas.length} metas en tu lista\n`);
    }
});

//Ejercicio 9: Filtra tus metas completas
console.log("---Ejercicio 9: Filtra tus metas completas--- \n");

fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('❌ Error al leer la lista de metas para filtrar:', err);
    } else {
        const metasLeidas = JSON.parse(data);
        const metasCompletas = metasLeidas.filter(meta => meta.includes("completa"));
        console.log('✨ Metas completas:', metasCompletas, '\n');
    }
});

//Ejercicio 10: Haz un respaldo de tus metas
console.log("---Ejercicio 10: Haz un respaldo de tus metas--- \n");

fs.copyFile('metas.json', 'metas_respaldo.json', (err) => {
    if (err) {
        console.error('❌ Error al crear el respaldo de tus metas:', err);
    } else {
        console.log('✅ Respaldo de tus metas creado exitosamente en metas_respaldo.json\n');
    }
});