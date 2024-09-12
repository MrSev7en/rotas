import { Inter } from 'next/font/google';

/**
 * Site instantiated font.
 */
export const font = Inter({
  variable: '--font-family',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

/**
 * Object containing color values with corresponding keys.
 */
export const colors = {
  none: 'none',
  current: 'currentColor',
  transparent: '#00000000',
  white: '#ffffff',
  black: '#000000',
  light: '#f2f3fa',
  primary: '#202c3f',
  secondary: '#606e84',
  actions: {
    blue: '#3a89ff',
    green: '#3ab195',
    purple: '#914fe4',
    pink: '#ff547d',
  },
};

/**
 * Generates a CSS gradient string with the specified parameters.
 * @param {string} direction The direction of the gradient ('to top', 'to bottom', '90deg', etc.).
 * @param {...string} gradient An array of color stops defining the gradient.
 * @returns {string} Returns the CSS gradient string.
 */
export function gradient(direction: string, ...gradient: string[]): string {
  return `linear-gradient(${direction}, ${gradient.join(', ')})`;
}

/**
 * Applies opacity to a given color and returns the modified color string.
 * @param {string} color The color string to which opacity will be applied. It should be in hexadecimal format (#rrggbb or #rrggbb or #rrggbbaa or #rgba).
 * @param {number} opacity The opacity level to apply to the color, represented as a percentage (0 to 100).
 * @returns {string} Returns the modified color string with opacity applied.
 */
export function opacity(color: string, opacity: number): string {
  const clamped = Math.min(Math.max(opacity, 0), 100);
  const percentage = Math.floor((clamped / 100) * 255);
  const hexadecimal = percentage.toString(16).padStart(2, '0');
  const regex = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i;

  if (regex.test(color)) {
    if (color.length === 4) {
      return `${color}${hexadecimal.slice(0, 1)}`;
    }

    return `${color}${hexadecimal}`;
  }

  return color;
}

/**
 * Generates a CSS box shadow string with the specified parameters.
 * @param {string} offsetX The horizontal offset of the shadow.
 * @param {string} offsetY The vertical offset of the shadow.
 * @param {string} blur The blur radius of the shadow.
 * @param {string} spread The spread radius of the shadow.
 * @param {string} color The color of the shadow.
 * @returns {string} Returns the CSS box shadow string.
 */
export function boxShadow(
  offsetX: string | number | null,
  offsetY: string | number | null,
  blur: string | number | null,
  spread: string | number | null,
  color: string | null,
): string {
  return `${offsetX || 0} ${offsetY || 0} ${blur || 0} ${spread || 0} ${
    color || 'currentColor'
  }`;
}

/**
 * Generates a CSS text shadow string with the specified parameters.
 * @param {string} offsetX The horizontal offset of the shadow.
 * @param {string} offsetY The vertical offset of the shadow.
 * @param {string} blur The blur radius of the shadow.
 * @param {string} color The color of the shadow.
 * @returns {string} Returns the CSS text shadow string.
 */
export function textShadow(
  offsetX: string | number | null,
  offsetY: string | number | null,
  blur: string | number | null,
  color: string | null,
): string {
  return `${offsetX || 0} ${offsetY || 0} ${blur || 0} ${
    color || 'currentColor'
  }`;
}
