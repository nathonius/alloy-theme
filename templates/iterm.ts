import Color from "color";
import Theme from "../theme";
import { readFileSync } from "fs";
import template from "lodash.template";

type ItermTheme =
  | "Ansi 0 Color"
  | "Ansi 1 Color"
  | "Ansi 2 Color"
  | "Ansi 3 Color"
  | "Ansi 4 Color"
  | "Ansi 5 Color"
  | "Ansi 6 Color"
  | "Ansi 7 Color"
  | "Ansi 8 Color"
  | "Ansi 9 Color"
  | "Ansi 10 Color"
  | "Ansi 11 Color"
  | "Ansi 12 Color"
  | "Ansi 13 Color"
  | "Ansi 14 Color"
  | "Ansi 15 Color"
  | "Background Color"
  | "Badge Color"
  | "Bold Color"
  | "Cursor Color"
  | "Cursor Guide Color"
  | "Cursor Text Color"
  | "Foreground Color"
  | "Link Color"
  | "Selected Text Color"
  | "Selection Color";

function iTermColor(name: ItermTheme, color: Color): string {
  const result: Record<string, number> = {
    "Red Component": color.rgb().red() / 255,
    "Green Component": color.rgb().green() / 255,
    "Blue Component": color.rgb().blue() / 255,
  };

  // Apply alpha
  if (color.rgb().alpha() !== 1) {
    result["Alpha Component"] = color.rgb().alpha();
  }

  // Convert to xml key/value records
  const records = Object.entries(result).map(([key, value]) => {
    return `\t\t<key>${key}</key>\n\t\t<real>${value}</real>`;
  });

  // Output
  const xmlResult = `\t<key>${name}</key>
\t<dict>
\t\t<key>Color Space</key>
\t\t<string>sRGB</string>
${records.join("\n")}
\t</dict>`;

  return xmlResult;
}

export function render(theme: typeof Theme, templatePath: string): string {
  // Define theme
  const itermTheme: Partial<Record<ItermTheme, string>> = {
    "Ansi 0 Color": iTermColor("Ansi 0 Color", theme["background-lighter-1"]), // black
    "Ansi 1 Color": iTermColor("Ansi 1 Color", theme["red-darker-1"]), // red
    "Ansi 2 Color": iTermColor("Ansi 2 Color", theme["green-darker-1"]), // green
    "Ansi 3 Color": iTermColor("Ansi 3 Color", theme["yellow-darker-1"]), // yellow
    "Ansi 4 Color": iTermColor("Ansi 4 Color", theme["blue-darker-1"]), // blue
    "Ansi 5 Color": iTermColor("Ansi 5 Color", theme["magenta-darker-1"]), // magenta
    "Ansi 6 Color": iTermColor("Ansi 6 Color", theme["cyan-darker-1"]), // cyan
    "Ansi 7 Color": iTermColor("Ansi 7 Color", theme.foreground), // white
    "Ansi 8 Color": iTermColor("Ansi 8 Color", theme["background-lighter-2"]), // bright black
    "Ansi 9 Color": iTermColor("Ansi 9 Color", theme.red), // bright red
    "Ansi 10 Color": iTermColor("Ansi 10 Color", theme.green), // bright green
    "Ansi 11 Color": iTermColor("Ansi 11 Color", theme.yellow), // bright yellow
    "Ansi 12 Color": iTermColor("Ansi 12 Color", theme.blue), // bright blue
    "Ansi 13 Color": iTermColor("Ansi 13 Color", theme.magenta), // bright magenta
    "Ansi 14 Color": iTermColor("Ansi 14 Color", theme.cyan), // bright cyan
    "Ansi 15 Color": iTermColor("Ansi 15 Color", theme["foreground-accent"]), // bright white
    "Background Color": iTermColor("Background Color", theme.background),
    "Foreground Color": iTermColor("Foreground Color", theme.foreground),
    "Bold Color": iTermColor("Bold Color", theme["foreground-accent"]),
    "Link Color": iTermColor("Link Color", theme["blue-darker-1"]),
    // "Badge Color": iTermColor("Badge Color", theme.),
    // "Cursor Color": iTermColor("Cursor Color", theme.),
    // "Cursor Guide Color": iTermColor("Cursor Guide Color", theme.),
    // "Cursor Text Color": iTermColor("Cursor Text Color", theme.),
    // "Selected Text Color": iTermColor("Selected Text Color", theme.),
    // "Selection Color": iTermColor("Selection Color", theme.),
  };

  // Construct output
  const output = Object.values(itermTheme).join("\n");

  // Read template file
  const itermcolors = readFileSync(templatePath, { encoding: "utf-8" });

  // Template
  const itermcolorsTemplate = template(itermcolors);
  return itermcolorsTemplate({ theme: output });
}

export default render;
