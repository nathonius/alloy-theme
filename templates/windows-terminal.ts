import Theme from "../theme";
export function render(theme: typeof Theme) {
  return {
    name: "Alloy",
    background: theme.background.hex(),
    black: theme["background-lighter-1"].hex(),
    blue: theme["blue-darker-1"].hex(),
    brightBlack: theme["background-lighter-2"].hex(),
    brightBlue: theme.blue.hex(),
    brightCyan: theme.cyan.hex(),
    brightGreen: theme.green.hex(),
    brightPurple: theme.magenta.hex(),
    brightRed: theme.red.hex(),
    brightWhite: theme["foreground-accent"].hex(),
    brightYellow: theme.yellow.hex(),
    cyan: theme["cyan-darker-1"].hex(),
    foreground: theme.foreground.hex(),
    green: theme["green-darker-1"].hex(),
    purple: theme["magenta-darker-1"].hex(),
    red: theme["red-darker-1"].hex(),
    white: theme.foreground.hex(),
    yellow: theme["yellow-darker-1"].hex(),
  };
}

export default render;
