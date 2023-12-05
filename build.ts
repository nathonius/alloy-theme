import { writeFileSync } from "fs";
import theme from "./theme";
import vscode from "./templates/vscode";
import prismjs from "./templates/prismjs";
import conemu from "./templates/conemu";
import windowsTerminal from "./templates/windows-terminal";
import iterm from "./templates/iterm";

// render vscode
console.log("Reading vscode template...");
const alloyVSCode = vscode(theme);
writeFileSync("./themes/vscode/themes/Alloy.json", JSON.stringify(alloyVSCode));
console.log("Wrote themes/vscode/themes/Alloy.json");

// render prismjs
console.log("Reading prismjs template...");
const alloyPrismjs = prismjs(theme, "./templates/prismjs.css");
writeFileSync("./themes/prismjs/prismjs-alloy.css", alloyPrismjs);
console.log("Wrote themes/prismjs/prismjs-alloy.css");

// render conemu
console.log("Reading conemu template...");
const alloyConemu = conemu(theme, "./templates/conemu.xml");
writeFileSync("./themes/conemu/Alloy.xml", alloyConemu);
console.log("Wrote themes/conemu/Alloy.xml");

// render windows terminal
console.log("Reading windows terminal template...");
const alloyWindowsTerminal = windowsTerminal(theme);
writeFileSync(
  "./themes/windows-terminal/Alloy.json",
  JSON.stringify(alloyWindowsTerminal)
);
console.log("Wrote themes/windows-terminal/Alloy.json");

// render iterm
console.log("Reading iTerm template...");
const alloyiTerm = iterm(theme, "./templates/iterm.itermcolors");
writeFileSync("./themes/iterm/Alloy.itermcolors", alloyiTerm);
console.log("Wrote themes/iterm/Alloy.itermcolors");
