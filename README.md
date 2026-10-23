# templo_chile

Landing de Templo Jiu Jitsu Culture Chile: https://mgbriones.github.io/templo_chile/#inicio

Se arma con [Eleventy](https://www.11ty.dev/) y se publica en GitHub Pages con cada push a `main` (`.github/workflows/deploy.yml`).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:8080 con recarga automática
npm run build   # genera _site/
```

## Dónde cambiar cada cosa

- **Textos** (títulos, botones, precios, bio, footer): `src/_data/textos.yml`, ordenados por componente.
- **Horarios y fotos de cada sede**: `src/_data/sedes.yml`.
- **Componentes**: `src/components/<componente>/` con su `.njk` (HTML), su `.css` y, si tiene comportamiento propio, su `.js`. El orden en la página está en `src/index.njk`.
- **Estilos compartidos**: `src/styles/tokens.css` (colores, fuentes) y `src/styles/base.css` (secciones, títulos, botones, pestañas).
- **JS compartido**: `src/scripts/pestanas.js` (pestañas de sede de horarios y galería).
- **`<head>`** (meta, fuentes): `src/_layouts/base.njk`.

Al construir, el CSS de todos los componentes se junta en `css/styles.css` y el JS en `js/main.js`.
