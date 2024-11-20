// Obtener la lista de contactos desde el servidor
function obtenerContactos() {
  fetch("http://localhost:3000/api/contactos")
    .then((response) => response.json())
    .then((data) => {
      const contactList = document.getElementById("contact-list");
      contactList.innerHTML = ""; // Limpiar la lista

      // Mostrar cada contacto en la lista
      data.forEach((contacto) => {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.textContent = contacto.nombre;
        tr.appendChild(tdNombre);

        const tdTelefono = document.createElement("td");
        tdTelefono.textContent = contacto.telefono;
        tr.appendChild(tdTelefono);

        const tdEmail = document.createElement("td");
        tdEmail.textContent = contacto.email;
        tr.appendChild(tdEmail);

        contactList.appendChild(tr);
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
