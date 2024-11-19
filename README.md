<a name="top" id="top"></a>

<img src="https://elfrente.com.co/content/images/size/w1304/format/webp/2024/08/TALENTO-TECH-EDUCACIO-TECNOLOGIA.png" alt="Logo Talento Tech" width="200" height="200">

# Desarrollo de una Aplicación Simple de Gestión de Contactos

# Talenton Tech - Carlos Eduardo Cabrera Córdoba

Aplicación de gestión de contactos con MariaDB, Nodejs para el backend y HTML5, CSS3 y JavaScript para el frontend.

Descripción del proyecto: [Descripción](#description)

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

- Desde el directorio del proyecto clonado, ejecuta el siguiente comando para instalar las dependencias necesarias:

  npm install

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

<a name="description" id="description"></a>

# Descripción del Proyecto

El proyecto consiste en una aplicación de gestión de contactos que permite a los usuarios agregar, eliminar y buscar contactos en una base de datos. Se utilizará MariaDB como base de datos y Node.js como servidor.

## Pasos del Proyecto:

#### Desarrollo de Clases y Objetos:

-Definir Clases: Crea clases para representar los elementos del sistema de gestión de contactos, como Contacto (con atributos como nombre, teléfono, email).

-Atributos y Métodos: Define atributos y métodos para la clase Contacto, asegurándote de incluir constructores, getters y setters.

#### Uso de Colecciones:

- Gestión de Datos: Utiliza una colección como ArrayList para gestionar la lista de contactos.
- Métodos de Gestión: Implementa métodos para añadir, eliminar y buscar contactos dentro de la lista.

#### Validación de Datos:

- Validación Básica: Implementa validación básica en los métodos de la clase Contacto para asegurar que los datos ingresados (como email y número de teléfono) son válidos.

#### Pruebas y Documentación:

- Pruebas Simples: Realiza pruebas básicas para asegurar que los métodos de la clase Contacto funcionan correctamente.
- Documentación: Documenta el diseño del sistema, cómo compilar y ejecutar la aplicación, y cualquier otra información relevante.

#### Entrega del Proyecto:

- Código Fuente: Suban el código fuente de la aplicación a la plataforma Moodle.
- Documentación: Incluyan una breve documentación que describa el diseño del sistema, instrucciones de compilación y ejecución, y cualquier otra información relevante.
- Presentación: Preparar una presentación de 5-10 minutos para mostrar el proyecto al resto de la clase, destacando las características principales y soluciones implementadas.

[Subir](#top)
