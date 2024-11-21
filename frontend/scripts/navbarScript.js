async function inicio() {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/inicio.html");
  const data = await response.text();
  contenido.innerHTML = data;
}

async function mostrar() {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/mostrar.html");
  const data = await response.text();
  contenido.innerHTML = data;
  obtenerContactos();
}

async function agregar() {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/agregar.html");
  const data = await response.text();
  contenido.innerHTML = data;
  obtenerContactos();
}

async function actualizar() {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/actualizar.html");
  const data = await response.text();
  contenido.innerHTML = data;
  actualizarContactos();
}

async function borrar() {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/borrar.html");
  const data = await response.text();
  contenido.innerHTML = data;
}
