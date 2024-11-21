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

function actualizarContactos() {
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

        const tdButton = document.createElement("td");
        tdButton.innerHTML = "<button>Actualizar</button>";
        tdButton.addEventListener("click", () => {
          actualizarContacto(
            contacto.id,
            contacto.nombre,
            contacto.telefono,
            contacto.email
          );
        });
        tr.appendChild(tdButton);

        contactList.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error al obtener contactos:", error));
}

// Actualizar un contacto
async function actualizarContacto(id, nombre, telefono, email) {
  console.log(id, nombre, telefono, email);

  const contenido = document.getElementById("contenido");
  const response = await fetch("./htmlFiles/actualizarContacto.html");
  const data = await response.text();
  contenido.innerHTML = data;

  const idInput = document.getElementById("id");
  idInput.value = id;
  const nombreInput = document.getElementById("nombre");
  nombreInput.value = nombre;
  const telefonoInput = document.getElementById("telefono");
  telefonoInput.value = telefono;
  const emailInput = document.getElementById("email");
  emailInput.value = email;
}

function actualizarEsteContacto() {
  const contenido = document.getElementById("contenido");

  const id = Number(document.getElementById("id").value);
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;

  // Validaciones del lado del frontend
  if (!nombre || !telefono || !email) {
    alert("Todos los campos son requeridos");
    return;
  }

  if (!validarNombre(nombre)) {
    alert(
      "Nombre inválido. Solo se permiten letras y caracteres especiales como tildes y ñ."
    );
    return;
  }
  if (!validarTelefono(telefono)) {
    alert("Número de teléfono inválido.");
    return;
  }
  if (!validarEmail(email)) {
    alert("Correo electrónico inválido.");
    return;
  }

  const data = { nombre, telefono, email };
  console.log(id, nombre, telefono, email);

  fetch(`http://localhost:3000/api/contactos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      console.log("Ahora necesitamos renderizar todos los contactos...");
      if (data.message === "Contacto actualizado exitosamente") {
        actualizar();
      }
    });
}

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

// Borrar contactos

function borrarContactos() {
  const listaContactos = document.getElementById("contact-list");
  listaContactos.innerHTML = "";

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

        const tdButton = document.createElement("td");
        tdButton.innerHTML = "<button>Borrar</button>";
        tdButton.addEventListener("click", () => {
          borrarContacto(
            contacto.id,
            contacto.nombre,
            contacto.telefono,
            contacto.email
          );
        });
        tr.appendChild(tdButton);

        contactList.appendChild(tr);
      });
    })
    .catch((error) => console.error("Error al obtener contactos:", error));
}

// Borrar un contacto
function borrarContacto(id) {
  fetch("http://localhost:3000/api/contactos/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      borrar();
    })
    .catch((error) => {
      console.error("Error al borrar el contacto:", error);
    });
}
