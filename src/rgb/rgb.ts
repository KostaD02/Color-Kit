import { HEX, RGB, RGBA } from "../types";

export function rgbToHex(rgb: RGB): HEX | null {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

  if (!match) {
    return null;
  }

  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);

  const clampedR = Math.max(0, Math.min(255, r));
  const clampedG = Math.max(0, Math.min(255, g));
  const clampedB = Math.max(0, Math.min(255, b));

  const hexR = clampedR.toString(16).padStart(2, "0");
  const hexG = clampedG.toString(16).padStart(2, "0");
  const hexB = clampedB.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}

export function rgbaToHexa(rgba: RGBA): HEX | null {
  const match = rgba.match(
    /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9]*\.?[0-9]+)\)/
  );

  if (!match) {
    return null;
  }

  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = parseFloat(match[4]);

  if (
    r < 0 ||
    r > 255 ||
    g < 0 ||
    g > 255 ||
    b < 0 ||
    b > 255 ||
    a < 0 ||
    a > 1
  ) {
    return null;
  }

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  const hexA = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${hexR}${hexG}${hexB}${hexA}`;
}

export function getRandomRgb(): RGB {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

export function getRandomRgba(): RGBA {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2);
  return `rgba(${r},${g},${b},${a})`;
}
