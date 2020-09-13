import template from "lodash.template";
import { readFileSync } from "fs";
import Theme from "../theme";
import Color from "color";

function toConEmuHexColor(color: Color): string {
  const hexColor = color.hex().slice(1); // hex color with no #
  const hexRed = hexColor.slice(0, 2);
  const hexGreen = hexColor.slice(2, 4);
  const hexBlue = hexColor.slice(4);
  return `00${hexBlue}${hexGreen}${hexRed}`;
}

export function render(theme: typeof Theme, xmlPath: string) {
  const themeKeys = Object.keys(theme);
  const conemuTheme: any = {};
  themeKeys.forEach((key) => {
    conemuTheme[key] = toConEmuHexColor((theme as any)[key]);
  });

  const conemuXml = readFileSync(xmlPath, {
    encoding: "utf-8",
  });
  const conemuTemplate = template(conemuXml);
  return conemuTemplate({ theme: conemuTheme });
}

export default render;
