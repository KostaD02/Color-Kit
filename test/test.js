const {
  rgbToHex,
  getRandomRgb,
  getRandomRgba,
  rgbaToHexa,
  getRandomHex,
  getRandomHexa,
  hexToRgb,
  hexaToRgba,
} = require("../dist/lib/es5/index");

const randomRGB = getRandomRgb();
const randomRGBA = getRandomRgba();
const randomHex = getRandomHex();
const randomHexa = getRandomHexa();

const randomRGBToHEX = rgbToHex(randomRGB);
const randomRGBAToHEXA = rgbaToHexa(randomRGBA);

const HEXToRGB = hexToRgb(randomRGBToHEX);
const HEXAToRGBA = hexaToRgba(randomRGBAToHEXA);

console.log(randomRGB, randomRGBA);
console.log(randomHex, randomHexa);
console.log(randomRGBToHEX, randomRGBAToHEXA);
console.log(HEXToRGB, HEXAToRGBA);
console.log(randomRGB === HEXToRGB, randomRGBA === HEXAToRGBA);
