// backend/contactoController.js

const mysql = require("mysql2");
const Contacto = require("./contacto");

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Cambia esto si tienes un usuario diferente
  password: "", // Cambia esto si tienes una contraseña
  database: "gestion_contactos",
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error de conexión: " + err.stack);
    return;
  }
  console.log("Conectado a la base de datos");
});

// Método para obtener todos los contactos
const obtenerContactos = (req, res) => {
  db.query("SELECT * FROM contactos", (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error al obtener contactos" });
      return;
    }
    res.json(result);
  });
};

// Método para agregar un nuevo contacto
const agregarContacto = (req, res) => {
  const { nombre, telefono, email } = req.body;

  try {
    // Crear un nuevo objeto Contacto
    const contacto = new Contacto(nombre, telefono, email);

    // Validar los datos
    contacto.validarDatos();

    // Insertar el contacto en la base de datos
    const query =
      "INSERT INTO contactos (nombre, telefono, email) VALUES (?, ?, ?)";
    db.query(
      query,
      [contacto.nombre, contacto.telefono, contacto.email],
      (err, result) => {
        if (err) {
          res.status(500).send({ message: "Error al agregar el contacto" });
          return;
        }
        res.status(201).send({ message: "Contacto agregado exitosamente" });
      }
    );
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { obtenerContactos, agregarContacto };
