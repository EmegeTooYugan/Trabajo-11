const fs = require('fs');
const path = require('path');

function importar(marca) {
  // Ruta del archivo JSON correspondiente a la marca recibida
  const rutaArchivo = path.join(__dirname, 'dhCollectibles', 'datos', `figuras${marca}.json`);

  try {
    // Leer el contenido del archivo JSON
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

    // Convertir el contenido a un array de objetos JSON
    const figuras = JSON.parse(contenido);

    // Retornar el array de objetos
    return figuras;
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la lectura del archivo
    console.error(`Error al leer el archivo JSON de la marca ${marca}:`, error);
    return [];
  }
}

module.exports = importar;