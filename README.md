# Prueba Técnica FUNTEC

Este proyecto es una maquetación de un diseño de una página de servicios legales, tanto para mobile como para desktop, basado en el diseño proporcionado en Figma. El proyecto se desarrollará utilizando React, TailwindCSS, TypeScript y otras tecnologías que se consideraron pertinentes.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Next.js**: Framework de React para aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
- **TailwindCSS**: Framework de CSS para un desarrollo rápido y eficiente.
- **TypeScript**: Un superconjunto de JavaScript que añade tipos estáticos.
- **ShadCn/ui**: Librería de componentes para React.

## Funcionalidades

- **Responsive Design**: La página es completamente responsiva, adaptándose a diferentes tamaños de pantalla, desde mobile hasta desktop.
- **Apartado de Citas**: Funcionalidad añadida para gestionar citas.

## Instrucciones de Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Raczan/FUNTEC.git
   cd FUNTEC
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```bash
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── toast.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

- **app/**: Contiene las páginas de la aplicación.
- **components/**: Componentes reutilizables.
- **lib/**: Funciones y utilidades compartidas.
- **public/**: Archivos estáticos como imágenes y fuentes.
