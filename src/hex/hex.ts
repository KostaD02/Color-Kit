import { HEX, RGB, RGBA } from "../types";

export function hexToRgb(hex: string): RGB | null {
  hex = hex.replace("#", "");

  if (!/^[0-9A-Fa-f]{6}$/i.test(hex)) {
    return null;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}

export function hexaToRgba(hexa: string): RGBA | null {
  hexa = hexa.replace("#", "");

  if (!/^[0-9A-Fa-f]{8}$/i.test(hexa)) {
    return null;
  }

  const r = parseInt(hexa.substring(0, 2), 16);
  const g = parseInt(hexa.substring(2, 4), 16);
  const b = parseInt(hexa.substring(4, 6), 16);
  const a = (parseInt(hexa.substring(6, 8), 16) / 255).toFixed(2);

  return `rgba(${r},${g},${b},${a})`;
}

export function getRandomHex(): HEX {
  const randomHexInt = Math.floor(Math.random() * 16777216);
  return `#${randomHexInt.toString(16).padStart(6, "0")}`;
}

export function getRandomHexa(): HEX {
  const randomHexInt = Math.floor(Math.random() * 16777216);
  const hexString = randomHexInt.toString(16).padStart(6, "0");
  const alpha = Math.floor(Math.random() * 256);
  const alphaHex = alpha.toString(16).padStart(2, "0");
  return `#${hexString}${alphaHex}`;
}
