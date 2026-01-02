/**
 * Checks if a value is a string or a String object.
 * @param x The value to check.
 * @return True if the value is a string.
 */
export const str = (x: any): x is string => {
    return typeof x === 'string' || x instanceof String;
};

/**
 * Checks if a value is an array.
 * @param x The value to check.
 * @return True if the value is an array.
 */
export const arr = (x: any): x is any[] => {
    return Array.isArray(x);
};

/**
 * Checks if a value is a valid, usable number.
 * @param x The value to check.
 * @return True if the value is a number.
 */
export const num = (x: any): x is number => {
    // Try because certain things (e.g. symbols) will throw an error when used in Number()
    try {
        // "" will return 0, [5] will return 5, so exclude strings and arrays
        if (str(x) || arr(x)) {
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
 * Checks if a value is a whole number (integer).
 * @param x The value to check.
 * @return True if the value is a whole number.
 */
export const int = (x: any): x is number => {
    if (num(x) && Number.isInteger(x)) {
        return true;
    }

    return false;
};
