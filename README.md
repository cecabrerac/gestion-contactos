<a name="top" id="top"></a>

<img src="https://elfrente.com.co/content/images/size/w1304/format/webp/2024/08/TALENTO-TECH-EDUCACIO-TECNOLOGIA.png" alt="Logo Talento Tech" width="200" height="200">

# Desarrollo de una Aplicación Simple de Gestión de Contactos

# Talenton Tech - Carlos Eduardo Cabrera Córdoba

Aplicación de gestión de contactos con MariaDB, Nodejs para el backend y HTML5, CSS3 y JavaScript para el frontend.

El proyecto consiste en una aplicación de gestión de contactos que permite a los usuarios agregar, editar y eliminar contactos en una base de datos. Se utiliza MariaDB como base de datos y Node.js como servidor.

Ver video de la aplicación en ejecución: [Video](https://youtu.be/-5zvIgmC5cU)

## Pasos para ejecutar la aplicación de manera local:

1. Clonar el Repositorio:

- Abre una terminal o línea de comandos.
- Navega hasta el directorio donde deseas clonar el proyecto.
- Clona el repositorio usando Git:

  ```
  git clone https://github.com/tu-usuario/gestion-contactos.git
  cd gestion-contactos
  ```

2. Instalar Node.js y npm:

- Asegúrate de tener Node.jsy npm instalados en tu sistema. Puedes descargarlos desde nodejs.org.
- Verifica la instalación ejecutando los siguientes comandos:
  ```
  node -v
  npm -v
  ```

3. Instalar Dependencias del Proyecto:

- Dentro del folder [ backend ] del directorio del proyecto clonado, ejecuta el comando para instalar las dependencias necesarias:

  ```
  cd backend
  npm install
  ```

4. Configurar la Base de Datos MariaDB:

- Asegúrate de tener MariaDB instalado y funcionando en tu máquina.
- Abre el cliente de línea de comandos de MariaDB o un programa como phpMyAdmin.
- Crea la base de datos y la tabla necesarias ejecutando los siguientes comandos SQL:

```
CREATE DATABASE gestion_contactos;
USE gestion_contactos;

CREATE TABLE contactos (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
telefono VARCHAR(15) NOT NULL,
email VARCHAR(50) NOT NULL
);
```

5. Configurar la Conexión a la Base de Datos:

- Abre el archivo server.js que se encuentra en el directorio /backend del proyecto.
- Asegúrate de que las credenciales y la configuración de la base de datos sean correctas:

  ```
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia esto si tienes un nombre de usuario diferente
    password: '', // Añade tu contraseña aquí si es necesario
    database: 'gestion_contactos'
    });
  ```

  6.Ejecutar el Servidor Node.js:

- Inicia el servidor Node.js ejecutando el siguiente comando desde el directorio /backend del proyecto:

node server.js

Deberías ver un mensaje indicando que el servidor está en ejecución: "Conectado a la base de datos"

7. Abrir el Frontend en un Navegador:

- Abre el archivo index.html en un navegador web.
- Puedes abrir el archivo directamente desde el explorador de archivos o ejecutar un servidor HTTP simple si prefieres:
  ```
  npx serve
  (Luego abre la URL que aparece en la terminal)
  ```

## Resumen de los Archivos Clave

- index.html: Contiene el HTML para el frontend de la aplicación.

- style.css: Contiene los estilos CSS para la aplicación.

- script.js: Contiene el JavaScript del frontend para gestionar eventos y enviar datos al backend.

- server.js: Contiene el código del servidor Node.js que maneja las solicitudes y la conexión a la base de datos MariaDB.

## Consideraciones Adicionales

- Asegúrate de que el puerto 3000 esté libre en tu máquina o cambia el puerto en el archivo index.js si es necesario.

- Si encuentras problemas de conexión con la base de datos, revisa las credenciales y configura el acceso remoto si no estás ejecutando MariaDB localmente.

Siguiendo estos pasos, otra persona debería poder ejecutar la aplicación de gestión de contactos de manera local sin problemas.

<br/>
<br/>

[Subir](#top)
