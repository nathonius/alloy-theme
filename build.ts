import { promises } from "fs";
import theme from "./theme";
import vscode from "./templates/vscode";

// render vscode
const alloyVSCode = vscode(theme);
promises.writeFile("./vscode/themes/Alloy.json", JSON.stringify(alloyVSCode));
