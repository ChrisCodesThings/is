/**
 * Basic type checking functions.
 * Includes checks for strings, arrays, numbers, and integers.
 */


/**
 * Checks if a value is an array.
 * @param x The value to check.
 * @return True if the value is an array.
 */
export const isArr = (x: any): x is any[] => {
    return Array.isArray(x);
};
