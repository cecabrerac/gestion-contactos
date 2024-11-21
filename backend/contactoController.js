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

// Método para obtener un contacto por su id
const obtenerContacto = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM contactos WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error al obtener contacto" });
      return;
    }
    res.json(result);
  });
};

// Metodo para actualizar un contacto
const actualizarContacto = (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, email } = req.body;
  console.log(id, nombre, telefono, email);

  try {
    // Crear un nuevo objeto Contacto
    const contacto = new Contacto(nombre, telefono, email);

    // Validar los datos
    contacto.validarDatos();

    // Actualizar el contacto en la base de datos
    const query =
      "UPDATE contactos SET nombre = ?, telefono = ?, email = ? WHERE id = ?";
    db.query(
      query,
      [contacto.nombre, contacto.telefono, contacto.email, id],
      (err, result) => {
        if (err) {
          res.status(500).send({ message: "Error al actualizar contacto" });
          return;
        }
        res.status(200).send({ message: "Contacto actualizado exitosamente" });
      }
    );
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
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

// Método para borrar un contacto
const borrarContacto = async (req, res) => {
  const { id } = req.params;
  query = "DELETE FROM contactos WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else {
      res.status(200).send({ message: "Contacto borrado exitosamente" });
    }
  });
};

module.exports = {
  obtenerContactos,
  obtenerContacto,
  actualizarContacto,
  agregarContacto,
  borrarContacto,
};
