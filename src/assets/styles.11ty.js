import { juntar } from "../_lib/juntar.js";

export const data = { permalink: "css/styles.css" };

export function render() {
  return juntar(["src/styles/tokens.css", "src/styles/base.css"], ".css");
}
