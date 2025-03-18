# **node_modules/**

* Contiene las librerías instaladas con npm. Se genera automáticamente al ejecutar npm install.

# **src/ (Código fuente del proyecto)**

* **models**/ → Contiene los modelos de datos, incluyendo interfaces.
  * **Event**.ts → Define la interfaz Event, que estructura los eventos.
* **repositories**/ → Contiene las clases que manejan datos (repositorios).
  * **Repository**.ts → Clase genérica para manejar cualquier tipo de datos.
  * **EventRepository**.ts → Clase específica para manejar eventos.
* **utils**/ → Contiene funciones auxiliares.
  * printEvents.ts → Función para imprimir eventos de manera legible.
* **index**.ts → Archivo principal que ejecuta el programa, creando y gestionando eventos.

# **package.json**

* Contiene la configuración del proyecto y las dependencias necesarias.

# **package-lock.json**

* Guarda la versión exacta de las dependencias instaladas para asegurar compatibilidad.

# **tsconfig.json**

* Configura TypeScript para la compilación y define reglas estrictas del lenguaje.



Prueba git Diego
