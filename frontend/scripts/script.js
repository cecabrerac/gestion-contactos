// Obtener la lista de contactos desde el servidor
function obtenerContactos() {
  fetch("http://localhost:3000/api/contactos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const contactList = document.getElementById("contact-list");
      contactList.innerHTML = ""; // Limpiar la lista

      // Mostrar cada contacto en la lista
      data.forEach((contacto) => {
        const li = document.createElement("li");
        li.textContent = `${contacto.nombre} - ${contacto.telefono} - ${contacto.email}`;
        contactList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error al obtener contactos:", error));
}

// Agregar un nuevo contacto
function agregarContacto() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;

  if (!nombre || !telefono || !email) {
    alert("Todos los campos son requeridos");
    return;
  }

  const data = { nombre, telefono, email };

  fetch("http://localhost:3000/api/contactos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      obtenerContactos();
    })
    .catch((error) => console.error("Error al agregar contacto:", error));
}

// Cargar los contactos al inicio
// window.onload = obtenerContactos;
