// backend/server.js

const express = require("express");
const bodyParser = require("body-parser");
const contactoController = require("./contactoController");
const app = express();
const cors = require("cors");

// Configuración de CORS
app.use(cors());

// Configuración del servidor
const port = 3000;

// Middleware para parsear datos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.get("/api/contactos", contactoController.obtenerContactos);
app.post("/api/contactos", contactoController.agregarContacto);
app.put("/api/contactos/:id", contactoController.actualizarContacto);
app.delete("/api/contactos/:id", contactoController.borrarContacto);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
