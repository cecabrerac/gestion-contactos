async function uploadHtml(fileName) {
  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/" + fileName + ".html");
  const data = await response.text();
  contenido.innerHTML = data;
  if (fileName === "mostrar") {
    obtenerContactos();
  } else if (fileName === "agregar") {
    obtenerContactos();
  } else if (fileName === "actualizar") {
    actualizarContactos();
  } else if (fileName === "borrar") {
    borrarContactos();
  }
}
