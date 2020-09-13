import color from "color";

// Base colors
const background = color({ h: 0, s: 0, l: 16 }); // #282828
const foreground = color({ h: 0, s: 0, l: 97 }); // #f7f7f7
const red = color({ h: 338, s: 93, l: 66 }); // #F95793
const magenta = color({ h: 260, s: 100, l: 85 }); // #CEB5FF
const cyan = color({ h: 190, s: 73, l: 76 }); // #97E0EF
const blue = color({ h: 218, s: 100, l: 85 }); // #b3cfff
const green = color({ h: 80, s: 70, l: 62 }); // #B5E25A
const orange = color({ h: 32, s: 97, l: 65 }); // #FCAC50
const yellow = color({ h: 60, s: 70, l: 62 }); // #E2E25A
const tan = color({ h: 54, s: 57, l: 76 }); // #E5DEA0
const error = color({ h: 0, s: 85, l: 71 }); // #F47777

export const theme = {
  background: background, // #282828
  "background-darker-1": background.darken(0.125), // #232323
  "background-darker-2": background.darken(0.25), // ##1e1e1e
  "background-lighter-1": background.lighten(0.25), // #333333
  "background-lighter-2": background.lighten(0.625), // #424242
  "background-lighter-3": background.lighten(1.875), // #757575
  foreground: foreground, // #f7f7f7
  "foreground-darker-1": foreground.darken(0.25), // #bababa
  "foreground-darker-2": foreground.darken(0.379), // #9A9A9A
  "foreground-accent": foreground.lighten(0.01), // #FAFAFA
  "foreground-muted": foreground.darken(0.526), // #757575
  red: red, // #F95793
  "red-darker-1": red.darken(0.197).desaturate(0.462), // #C34B77
  "red-darker-2": red.darken(0.379).desaturate(0.613), // #8E435E
  magenta: magenta, // #CEB5FF
  "magenta-darker-1": magenta.darken(0.212).desaturate(0.68), // #A290C6
  cyan: cyan, // #97E0EF
  "cyan-darker-1": cyan.darken(0.197).desaturate(0.562), // #7CB1BB
  blue: blue, // #b3cfff
  "blue-darker-1": blue.darken(0.212).desaturate(0.68), // #90A4C6
  "blue-darker-2": blue.darken(0.526).desaturate(0.562), // #3A5B94
  green: green, // #B5E25A
  "green-darker-1": green.darken(0.177).desaturate(0.414), // #93B54F
  "green-darker-2": green.darken(0.379).desaturate(0.414), // #708A3A
  "green-darker-3": green.darken(0.526).desaturate(0.414), // #556A2C
  orange: orange, // #FCAC50
  "orange-darker-1": orange.darken(0.197).desaturate(0.462), // #C58945
  yellow: yellow, // #E2E25A
  "yellow-darker-1": yellow.darken(0.177).desaturate(0.414), // #B5B54F
  tan: tan, // #E5DEA0,
  error: error, // #F47777
};

// console.log(theme["foreground-darker-2"].hex());
// console.log(theme["blue-darker-1"].hex());

// const newBlueDarker = color({ h: 218, s: 61, l: 74 });
// const newBlue = newBlueDarker.lighten(0.212).saturate(0.68);

// console.log(newBlueDarker.hex()); // #95B2E5
// console.log(newBlue.hex()); // #CADEFF

console.log(theme.red.rgbNumber());

export default theme;
