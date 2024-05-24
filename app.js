// Importa el módulo express
const express = require('express');

// Crea una instancia de la aplicación express
const app = express();

// Define una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo 4toIC!');
});

// Escucha en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
