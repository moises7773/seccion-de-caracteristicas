# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size


### Links

- Solution URL: [https://github.com/moises7773/seccion-de-caracteristicas.git]
- Live Site URL: [https://github.com/moises7773/seccion-de-caracteristicas.git]
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

## Lo que aprendí

- Elegí una estructura HTML más semántica usando un `<header>` para la introducción y una lista `<ul>` con elementos `<li>` para agrupar las funcionalidades de la página.
- Organicé correctamente la jerarquía de encabezados: un `<h1>` para el título principal y encabezados secundarios para cada card.
- Aprendí a inspeccionar un diseño en Figma para identificar colores, bordes, radio de esquinas, espaciados y sombras.
- Convertí los valores de Figma para una sombra a CSS mediante `box-shadow`, entendiendo los valores de posición horizontal, vertical, desenfoque, expansión, color y opacidad.
- Construí el diseño con un enfoque *mobile first*: primero una columna para móvil y después cambios para pantallas más grandes.
- Usé CSS Grid para distribuir las cards en tablet, ya que la composición necesita controlar filas, columnas y posiciones específicas.
- Utilicé `grid-template-areas` y `grid-area` para colocar cada card de forma más legible dentro de la cuadrícula.
- Comprendí que los `<li>` pueden usar `display: flex` para organizar su contenido interno, mientras que el `<ul>` usa `display: grid` para posicionar las cards.
- Aprendí a usar media queries dentro de CSS Modules sin perder el alcance local de las clases.
- Identifiqué errores comunes de Grid, como usar `grid-template-columns: 1` en vez de `1fr`, o aplicar `grid-area` al `<ul>` en lugar de sus elementos `<li>`.

### Continued development

- Usar `flex-grow`, `flex-shrink` y `flex-basis` para decidir cómo crecen, se reducen y ocupan espacio los elementos dentro de un componente.
- Trabajar con `flex-wrap` para que una fila de elementos pueda pasar a varias líneas cuando ya no haya espacio suficiente.
- Comprender los ejes principal y cruzado de Flexbox, y practicar `justify-content`, `align-items` y `align-self`.
- Usar Grid con mayor precisión mediante líneas, `grid-column`, `grid-row` y elementos que ocupan más de una columna o fila.
- Crear cuadrículas fluidas con `repeat()`, `minmax()`, `auto-fit` y `auto-fill`, para que las columnas respondan al espacio disponible.
- Decidir cuándo un cambio de diseño puede adaptarse automáticamente y cuándo debe usar una media query porque la composición cambia intencionalmente.
- Aplicar un enfoque *mobile first* definiendo primero la experiencia móvil y agregando mejoras progresivas para tablet y desktop.
- Practicar cómo combinar Grid para el layout general de una sección y Flexbox para alinear el contenido interno de cada card.
- Revisar el comportamiento del diseño en distintos anchos, incluidos textos largos, imágenes grandes y pantallas intermedias.


## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/moises7773]

