# Rick and Morty: explorador de ubicaciones

Aplicación en React que muestra las ubicaciones del universo de Rick and Morty y a sus residentes, usando la [Rick and Morty API](https://rickandmortyapi.com/). Es un proyecto de formación.

**Demo:** https://rick-and-morty-zeta-three.vercel.app

## Qué hace

- Abre con una ubicación al azar.
- Busca una ubicación por nombre o por número.
- Muestra tipo, dimensión y población de la ubicación.
- Pagina a los residentes de 20 en 20, con su estado, especie, origen y número de apariciones.
- Pide los residentes de cada página en una sola petición, porque la API limita las peticiones seguidas.
- Muestra estados de carga y avisa cuando una búsqueda no da resultado o no se puede llegar a la API.

## Tecnologías

React 18, Vite, Tailwind CSS, Axios y Tabler Icons.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```text
src/
├── App.jsx                 Carga la primera ubicación
├── components/
│   ├── Location.jsx        Buscador y datos de la ubicación
│   ├── ResidentList.jsx    Lista paginada de residentes
│   └── ResidentCard.jsx    Tarjeta de un residente
└── utils/
    ├── pagination.js       Reparte los residentes en páginas
    └── random.js           Número al azar
```
