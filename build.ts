import { writeFileSync } from "fs";
import theme from "./theme";
import vscode from "./templates/vscode";
import prismjs from "./templates/prismjs";

// render vscode
console.log("Reading vscode template...");
const alloyVSCode = vscode(theme);
writeFileSync("./vscode/themes/Alloy.json", JSON.stringify(alloyVSCode));
console.log("Wrote vscode/themes/Alloy.json");

// render prismjs
console.log("Reading prismjs template...");
const alloyPrismjs = prismjs(theme, "./templates/prismjs.css");
writeFileSync("./prismjs/prismjs-alloy.css", alloyPrismjs);
console.log("Wrote prismjs/prismjs-alloy.css");
