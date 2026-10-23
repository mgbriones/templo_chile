import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const COMPONENTES = "src/components";

// Junta los archivos globales (en el orden dado) y luego los de cada componente
// con la extensión pedida, para servir un solo archivo al navegador.
export function juntar(globales, extension) {
  const deComponentes = readdirSync(COMPONENTES, { recursive: true })
    .filter((ruta) => ruta.endsWith(extension))
    .sort()
    .map((ruta) => join(COMPONENTES, ruta));

  return [...globales, ...deComponentes]
    .map((ruta) => `/* ${ruta} */\n${readFileSync(ruta, "utf8").trim()}\n`)
    .join("\n");
}
