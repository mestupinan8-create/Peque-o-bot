# Proyecto Casuística — Chatbot Q&A (React + TypeScript)

Proyecto frontend en React + TypeScript que contiene una pequeña aplicación para responder preguntas sobre JavaScript, TypeScript y conceptos relacionados. No usa base de datos ni autenticación; todo corre en cliente.

## Instalación y ejecución

```bash
cd proyectoCasuistica
npm install
npm run dev
```

El servidor de desarrollo se ejecutará en `http://localhost:5173`.

## Características

- **Inicio**: Descripción del proyecto y funcionalidades.
- **FAQ**: Lista de preguntas y respuestas preparadas sobre JS, TS y POO.
- **Preguntar**: Buscador inteligente que encuentra respuestas basadas en palabras clave y sinónimos.

## Tecnologías

- React 18
- TypeScript
- Vite (bundler)
- CSS moderno con variables CSS

## Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables (NavBar)
├── pages/         # Páginas principales (Home, FAQ, Ask)
├── data/          # Dataset de preguntas y respuestas
└── styles.css     # Estilos globales
```

## Funcionalidades

- Navegación entre páginas
- Búsqueda inteligente de respuestas
- Interfaz responsive
- Diseño moderno y accesible
