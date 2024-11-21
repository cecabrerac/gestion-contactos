// backend/contacto.js

class Contacto {
  constructor(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }

  // Método para validar los datos del nombre
  static validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
  }

  // Método para validar los datos del contacto
  static validarTelefono(telefono) {
    const regex = /^[0-9]{9,15}$/;
    return regex.test(telefono);
  }

  static validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  // Método para verificar si los datos del contacto son válidos
  validarDatos() {
    if (!this.nombre || !this.telefono || !this.email) {
      throw new Error("Todos los campos son requeridos");
    }
    if (!Contacto.validarNombre(this.nombre)) {
      throw new Error(
        "Nombre inválido. Solo se permiten letras y caracteres especiales como tildes y ñ."
      );
    }
    if (!Contacto.validarTelefono(this.telefono)) {
      throw new Error("Número de teléfono inválido");
    }
    if (!Contacto.validarEmail(this.email)) {
      throw new Error("Correo electrónico inválido");
    }
  }
}

module.exports = Contacto;
