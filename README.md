# Color Utils

Color-utils is a lightweight TypeScript library for working with colors in web development projects. It provides convenient methods for converting between different color formats, generating random colors, and more.

## Installation

You can install color-uit via npm:

```bash
npm i @kostad/color-utils
```

## Usage

This library is compatible with both JavaScript and TypeScript projects, allowing seamless integration into a wide range of web development environments.

For JavaScript:

```js
const { getRandomHex, getRandomRgb } = require("@kostad/color-utils");

console.log(getRandomHex()); // #b68e0a
console.log(getRandomRgb()); // rgb(104,95,95)
```

For Typescript

```ts
import { getRandomHex, getRandomRgb } from "@kostad/color-utils";

console.log(getRandomHex()); // #867220
console.log(getRandomRgb()); // rgb(59,135,164)
```

## API

The library provides a variety of methods for working with RGB and hexadecimal color formats. In the future, additional functionalities such as HSL support will be added.

### RGB

| Method          | Params | Description                                                                                                                                                                                                                                            | Return           |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `getRandomRgb`  | None   | The function will return random RGB color                                                                                                                                                                                                              | `rgb`            |
| `getRandomRgba` | None   | The function will return random RGBA color                                                                                                                                                                                                             | `rgba`           |
| `rgbToHex`      | `rgb`  | The function will accept an RGB string in plain text format (`'rgb(r,g,b)'`). It will attempt to convert it to hexadecimal. If conversion is successful, it will return the hexadecimal value. If conversion is not possible, it will return null.     | `hex` or `null`  |
| `rgbaToHexa`    | `rgba` | The function will accept an RGBA string in plain text format (`'rgba(r,g,b,a)'`). It will attempt to convert it to hexadecimal. If conversion is successful, it will return the hexadecimal value. If conversion is not possible, it will return null. | `hexa` or `null` |

### HEX

| Method          | Params | Description                                                                                                                                                                                                                          | Return           |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `getRandomHex`  | None   | The function will return random HEX color                                                                                                                                                                                            | `hex`            |
| `getRandomHexa` | None   | The function will return random HEXA color                                                                                                                                                                                           | `hexa`           |
| `hexToRgb`      | `hex`  | The function will accept a hexadecimal string (`#rrggbb`) as input. It will attempt to convert it to an RGB format. If conversion is successful, it will return the RGB value. If conversion is not possible, it will return null.   | `rgb` or `null`  |
| `hexaToRgba`    | `hexa` | The function will accept a hexadecimal string (`#rrggbbaa`) as input. It will attempt to convert it to an RGB format. If conversion is successful, it will return the RGB value. If conversion is not possible, it will return null. | `rgba` or `null` |

## License

Color Utils is [MIT licensed](https://github.com/KostaD02/color-utils/blob/main/LICENSE)
