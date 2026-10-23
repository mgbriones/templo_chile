import { juntar } from "../_lib/juntar.js";

export const data = { permalink: "js/main.js" };

export function render() {
  return juntar(["src/scripts/pestanas.js"], ".js");
}
