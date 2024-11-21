//FUNCIONES DE VALIDACIÓN DEL LADO DEL FRONTEND

// Método para validar los datos del nombre
function validarNombre(nombre) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(nombre);
}

// Método para validar los datos del telefono
function validarTelefono(telefono) {
  const regex = /^[0-9]{9,15}$/;
  return regex.test(telefono);
}

// Método para validar los datos del correo
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
