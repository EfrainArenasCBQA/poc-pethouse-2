# POC Pethouse

Pequeño POC frontend con React + TypeScript que muestra un catálogo de mascotas para el personal de una tienda. Permite marcar mascotas como "En adopción" o "Adoptado".

How to run (macOS / zsh):

```bash
cd /Users/efrain/Desktop/POC\ Pethouse\ 2
npm install
npm run dev
```

Features:
- Catálogo de perros y gatos
- Fotos, descripción, peso, especie, raza y tamaño
- Botón para alternar estado (En adopción / Adoptado)

Notes:
- Es un POC frontend; no hay backend. Los datos están en memoria en `src/data/pets.ts`.
- Puedes añadir más mascotas editando `src/data/pets.ts`.
