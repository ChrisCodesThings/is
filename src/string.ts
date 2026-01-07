/**
 * String validation functions.
 * Includes checks for specific string formats like hex colors.
 */

import { isStr } from './basic.js';


/**
 * Checks if a value is a hex color string.
 * Supports: #RGB, #RGBA, #RRGGBB, #RRGGBBAA (with or without #).
 * @param x The value to check.
 * @return True if the value is a hex color string.
 */
export const isHexColor = (x: string): boolean => {
    if (isStr(x)) {
        x = x.startsWith("#") ? x.slice(1) : x;

        return (
            (x.length == 3 || x.length == 4 || x.length == 6 || x.length == 8)
            && /^[0-9A-Fa-f]+$/.test(x)
        );
    }

    return false;
};