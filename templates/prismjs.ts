import template from "lodash.template";
import { readFileSync } from "fs";
import Theme from "../theme";

export function render(theme: typeof Theme, cssPath: string) {
  const prismjsCss = readFileSync(cssPath, {
    encoding: "utf-8",
  });
  const prismjsTemplate = template(prismjsCss);
  return prismjsTemplate({ theme });
}

export default render;
