/**
 * String validation functions.
 * Includes checks for specific string formats like hex colors.
 */


/**
 * Checks if a value is a string or a String object.
 * @param x The value to check.
 * @return True if the value is a string.
 */
export const isStr = (x: any): x is string => {
    return typeof x === 'string' || x instanceof String;
};

export interface WordOptions {
    hyphen?: boolean;
    underscore?: boolean;
    numbers?: boolean;
}

/**
 * Checks if a string is a "word" consisting of allowed characters.
 * By default, only letters (a-z, A-Z) are allowed.
 * @param str The string to check.
 * @param options Configuration options for allowed characters.
 * @param options.hyphen Whether to allow hyphens.
 * @param options.underscore Whether to allow underscores.
 * @param options.numbers Whether to allow numbers.
 * @returns True if the string contains only allowed characters.
 */
export const isWord = (str: string, options: WordOptions = {}): boolean => {
    // Generate character set based on options
    let charSet = "a-zA-Z";
    if (options.hyphen) charSet += "\\-";
    if (options.underscore) charSet += "_";
    if (options.numbers) charSet += "0-9";

    return (new RegExp(`^[${charSet}]+$`)).test(str);
};

/**
 * Checks if a string has balanced characters (e.g. brackets).
 * `chr1` and `chr2` must be single characters.
 * @param str The string to check.
 * @param chr1 The opening character (e.g. '(').
 * @param chr2 The closing character (e.g. ')').
 * @returns True if the string is balanced.
 */
export const isBalancedChr = (str: string, chr1: string, chr2: string): boolean => {
    let count = 0;
    for (const char of str) {
        if (char === chr1) count++;
        if (char === chr2) count--;
        if (count < 0) return false; // Found a closing bracket before an opening one
    }
    return count === 0;
};