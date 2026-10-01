
# 🏗️ SM Contenedores - Web Platform

Plataforma web oficial para **SM Contenedores**, empresa especializada en el servicio de alquiler de contenedores y gestión de residuos para obras de construcción, industrias y particulares en San Miguel de Tucumán y alrededores.

El diseño de la interfaz destaca por su estética **brutalista e industrial**, utilizando paletas de colores sobrias (zinc, blancos y detalles en rojo fuerte), esquinas cuadradas, bordes gruesos y sombras duras para transmitir solidez, maquinaria pesada y confiabilidad.

## 🚀 Tecnologías y Herramientas

Este proyecto está construido con un stack moderno enfocado en el rendimiento y la escalabilidad:

*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Enrutamiento:** [React Router v7](https://reactrouter.com/)
*   **Componentes UI:** [Radix UI](https://www.radix-ui.com/) (Headless UI para menús y accesibilidad)
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **Animaciones:** Framer Motion / Motion

## ⚙️ Características Principales

*   **Diseño 100% Responsivo:** Adaptado perfectamente a dispositivos móviles, tablets y monitores de escritorio.
*   **Navegación Dinámica:** Menú tipo "hamburguesa" optimizado para celulares.
*   **Grillas Industriales:** Visualización interactiva de clientes y servicios.
*   **Integración de Mapas:** Mapa embebido sin dependencias de API Keys, mostrando la base de operaciones.
*   **Contactos Directos:** Enlaces `tel:` y `wa.me` para comunicación instantánea desde dispositivos móviles.

---

## 🛠️ Instalación y Configuración Local

Para correr este proyecto en tu entorno local, asegúrate de tener [Node.js](https://nodejs.org/) instalado.

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/tu-usuario/sm-contenedores-web.git
cd sm-contenedores-web
\`\`\`

### 2. Instalar dependencias
Debido a la estructura del paquete exportado, es recomendable forzar la instalación de React primero y luego el resto de las dependencias:
\`\`\`bash
npm install react@18.3.1 react-dom@18.3.1
npm install
\`\`\`

### 3. Servidor de Desarrollo
\`\`\`bash
npm run dev
\`\`\`
El proyecto estará disponible en `http://localhost:5173`.

---

## 📁 Estructura de Directorios Clave

\`\`\`text
/
├── public/
│   └── images/            # Assets estáticos (Logo, clientes, contenedores)
├── src/
│   ├── components/        # Componentes reutilizables (Navigation, Cards, etc.)
│   ├── pages/             # Vistas principales (Home, Nosotros, Servicios, Contacto)
│   ├── App.tsx            # Configuración de Rutas
│   └── index.css          # Estilos globales y directivas de Tailwind
├── package.json
└── vite.config.js
\`\`\`

## 🖼️ Gestión de Assets (Imágenes)

Para que las imágenes dinámicas funcionen correctamente, asegúrate de colocar los siguientes archivos en la carpeta `public/images/`:
*   `logo.png`: Logo principal de la barra de navegación.
*   `cliente1.png` al `cliente12.png`: Logos en blanco y negro para la grilla de "Nuestros Clientes".

---

## 📜 Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo local con Hot Module Replacement (HMR).
*   `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
*   `npm run preview`: Levanta un servidor local para previsualizar el build de producción.

## 👨‍💻 Desarrollo y Mantenimiento

Desarrollado y mantenido para automatizar e impulsar la presencia digital de **SM Contenedores**.
