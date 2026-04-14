# TJA Gym - Proyecto Web

Este es el proyecto de nuestra página web para el gimnasio **TJA Gym**. El objetivo principal es practicar HTML, CSS y ahora también JavaScript montando un sitio web con varias páginas enlazadas.

## Estructura del proyecto

La web consta de los siguientes archivos:

* **index.html**: Página de inicio con la presentación del gimnasio.
* **content.html**: Información sobre las áreas del gym (cardio, musculación, nutrición).
* **detail.html**: Página de detalle de producto (nuestra proteína TJA Whey).
* **info.html**: Información sobre el proyecto y los autores.
* **login.html**: Formulario de inicio de sesión.
* **contact.html**: Formulario de contacto con muro de comentarios.
* **css/style.css**: Hoja de estilos con todo el diseño visual.
* **js/script.js**: Archivo JavaScript compartido (modo oscuro).
* **Carpeta `imagenes/`**: Contiene las fotos del gimnasio y el logo.

## Diseño y Estilos (CSS)

Hemos creado una hoja de estilos (`style.css`) para dar personalidad a la web.

**Características principales del diseño:**

* **Paleta de Colores:** Hemos usado los colores corporativos del logo:
    * **Azul Oscuro (#1B263B):** Para el encabezado y el pie de página.
    * **Naranja (#E07A2E):** Para destacar botones, enlaces y subrayados de títulos.
    * **Gris Claro/Blanco:** Para los fondos y secciones de lectura.
* **Maquetación:**
    * Uso de **Flexbox** para alinear el menú de navegación y las listas.
    * Márgenes y rellenos (padding) para que el texto no se vea pegado a los bordes.
* **Diseño Responsivo:**
    * Media queries para que el menú se vea bien en moviles.
    * Las imágenes se ajustan automáticamente al tamaño de la pantalla.

## Formularios

Hemos añadido dos formularios (Login y Contacto):

* `type="email"`: Para validar automáticamente el formato del correo.
* `type="password"`: Para ocultar los caracteres en el inicio de sesión.
* `<textarea>`: Para permitir escribir mensajes largos en el contacto.

## Funcionalidades JavaScript - Tasques obligatòries

### Tasca 1 - Interacció visual (Adrián)

**Modo claro / Modo oscuro**
Se añadio un boton en el header de todas las paginas. Al hacer clic añade o quita la clase `dark-mode` al body, lo que cambia todos los colores de la web (fondo oscuro, texto claro). El boton cambia su texto segun el estado actual.

**Efectes de ratolí (mouseover / mouseout)**
En la página de inicio (index.html), la imagen principal del gimnasio cambia de tamaño y le aparece un borde naranja cuando el ratón pasa por encima. Al salir vuelve a su estado original. Esto se hace con los eventos `onmouseover` y `onmouseout` directamente en el elemento.

**Mostrar / Ocultar**
También en index.html hay un botón encima de la sección "Nuestra misión". Al hacer clic esconde o muestra esa sección y el texto del botón cambia entre "Ocultar seccion" y "Mostrar seccion".

### Tasca 2 - Formularis i Comentaris (Jordi)

**Validació de dades**
En contact.html, el formulario ya no tiene el atributo `required` en los campos. En su lugar, cuando el usuario hace clic en Enviar, una funcion JavaScript revisa si algún campo está vacío. Si lo está, muestra un mensaje de error en rojo sin recargar la pagina.

**Mur de comentaris**
Cuando el formulario se envia correctamente, el comentario se añade automaticamente a una lista debajo del formulario, con el nombre del usuario en negrita. Los campos se limpian solos despues de enviar. Todo sin recargar la pagina.

## Tasca extra - Carrusel d'imatges (Tomeu)

En index.html se añadio un carrusel con las 5 imagenes del gimnasio. Tiene botones de "Anterior" y "Siguiente" para cambiar manualmente. Ademas, las imagenes cambian solas cada 4 segundos automaticamente.

## Como ver la web

1. Descarga el repositorio o los archivos.
2. Asegúrate de que `style.css` está en la carpeta `css/` y `script.js` en la carpeta `js/`.
3. Abre el archivo `index.html` en tu navegador.
4. Navega por las secciones usando el menú superior.

---

Trabajo realizado por:
* Tomeu Sastre Garcés
* Jordi Valarezo Méndez
* Adrián Pascual Lara
