/**
 * Number validation functions.
 * Includes checks for specific number formats like percentages.
 */

import { isArr, isStr } from './index.js';


/**
 * Checks if a value is a valid, usable number.
 * @param x The value to check.
 * @return True if the value is a number.
 */
export const isNum = (x: any): x is number => {
    // Try because certain things (e.g. symbols) will throw an error when used in Number()
    try {
        // "" will return 0, [5] will return 5, so exclude strings and arrays
        if (isStr(x) || isArr(x)) {
            return false;
        }

        return (
            !isNaN(Number(x)) &&    // objects, undef
            typeof x === 'number'   // boolean, null
            && x - x === 0          // Infinity
        );
    } catch {
        return false;
    }
};


/**
 * Checks if a value is valid, usable integer (whole number).
 * @param x The value to check.
 * @return True if the value is a whole number.
 */
export const isInt = (x: any): x is number => {
    if (isNum(x) && Number.isInteger(x)) {
        return true;
    }

    return false;
};


/**
 * Checks if a value is a percentage string (e.g. "50%", "12.5%").
 * @param x The value to check.
 * @returns True if the value is a valid percentage string.
 */
export const isPct = (x: string): boolean => {
    if (!isStr(x)) return false;
    if (!x.endsWith('%')) return false;
    if (isNaN(Number(x.slice(0, -1)))) return false;

    return true;
}
