Pizzería Mamma Mía - Hito 1

Este proyecto es la primera etapa del desarrollo de la aplicación "Pizzería Mamma Mía", realizado como parte de los desafíos de la Academia de Talentos Digitales de Desafío Latam. El objetivo principal es aplicar conocimientos fundamentales de React y Vite.js.

* Descripción del Proyecto

La aplicación consiste en una interfaz básica para una pizzería, estructurada mediante componentes reutilizables. En esta fase, se trabaja principalmente en la estructura de la interfaz y la integración de Bootstrap.Requerimientos Técnicos

Para este hito, se han implementado los siguientes componentes:
1. App.jsx: Componente principal que integra Navbar, Home y Footer.
2. Navbar.jsx: Menú de navegación que incluye:

* Opciones de navegación (Home, Profile, Logout, Login, Register).
* Visualización dinámica de botones basada en un token (simulación de sesión).
* Indicador de Total de compra formateado (usando toLocaleString).

3. Header.jsx: Componente que contiene el título y una descripción, renderizado dentro de Home.jsx.
4. Home.jsx: Contenedor principal de la página que agrupa los componentes de cabecera y listado de productos.
5. CardPizza.jsx: Componente reutilizable para mostrar la información detallada de cada pizza (nombre, precio, ingredientes, imagen).

Propiedades de Componentes (Props)

El componente CardPizza recibe las siguientes propiedades para renderizar las pizzas solicitadas:

* name: Nombre de la pizza.
* price: Precio del producto.
* ingredients: Lista de ingredientes.
* img: URL de la imagen del producto.

Consideraciones Adicionales

1. Estilos: El proyecto incorpora Bootstrap para el diseño y maquetación de los elementos.
2. Funcionalidad: Los botones de "Ver Más", "Añadir" y el sistema de navegación no tienen funcionalidad activa en este hito (son solo visuales).
3. Simulación de Estado: Se utiliza una variable booleana token para alternar la visualización del menú.
Desarrollado para el desafío de Introducción a React por Marcelo Flores Fuentealba - Desafío Latam.
