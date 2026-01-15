# is <br> [![Test workflow status](https://github.com/ChrisCodesThings/is/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/is)](https://www.npmjs.com/package/@chriscodesthings/is) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Type checking utilities**

## Description

A collection of lightweight type checking and validation functions.

### See...
- [Install / Usage](#install--usage "Install and Usage")
- [Reference](#reference "List of functions")
- [Functions](#functions "Detailed documentation")
- [See Also](#see-also "Related projects")

---

## Install from NPM

```sh
npm install --save @chriscodesthings/is
```

## Usage

### Node / CDN

```js
// Node
import * as is from '@chriscodesthings/is';

// ... or ... //

// jsDelivr
import * as is from 'https://cdn.jsdelivr.net/npm/@chriscodesthings/is';

// ... or ... //

// Unpkg
import * as is from 'https://unpkg.com/@chriscodesthings/is';


is.isStr("hello world!"); // true
```

---

## Reference

### Numbers

| Function | Description |
| :--- | :--- |
| [`is.isNum(x)`](#isisnum) | Checks if a value is a finite number. |
| [`is.isInt(x)`](#isisint) | Checks if a value is an integer. |
| [`is.isPct(x)`](#isispct) | Checks if a string is a percentage. |

### Strings

| Function | Description |
| :--- | :--- |
| [`is.isStr(x)`](#isisstr) | Checks if a value is a string. |
| [`is.isWord(str, [options])`](#isisword) | Checks if a string is a "word" consisting of allowed characters. |
| [`is.isBalancedChr(str,c1,c2)`](#isisbalancedchr) | Checks if a string is balanced, e.g. ( and ) are properly matched. Single character version. |

### Arrays

| Function | Description |
| :--- | :--- |
| [`is.isArr(x)`](#isisarr) | Checks if a value is an array. |

## Functions

### Number Functions

#### `is.isNum`
Checks if a variable is a finite number.

```js
is.isNum(42);  // true
is.isNum(NaN); // false
```
[Back to Reference](#reference)

---

#### `is.isInt`
Checks if a variable is a mathematical integer.

```js
is.isInt(42);  // true
is.isInt(42.5); // false
```

[Back to Reference](#reference)

---

#### `is.isPct`
Checks if a string is a percentage.

```js
is.isPct("25%");  // true
is.isPct("15"); // false
is.isPct(7); // false
```

[Back to Reference](#reference)

---

### String Functions

#### `is.isStr`
Checks if a variable is a string or a String object.

```js
is.isStr('hello'); // true
is.isStr(123);     // false
```

[Back to Reference](#reference)

---

#### `is.isWord`
Checks if a string consists only of alphabetical characters by default. Use options to permit hyphens, underscores, or numbers.

```js
is.isWord('hello');               // true
is.isWord('hello-world');         // false
is.isWord('hello-world', { hyphen: true }); // true
is.isWord('user_123', { underscore: true, numbers: true }); // true
```

[Back to Reference](#reference)

---

#### `is.isBalancedChr`

Checks if a string has balanced characters (e.g., brackets). This function uses a depth counter to ensure every opening character has a corresponding closing character in the correct order.

```js
isBalancedChr("(a + b)", "(", ")");        // true
isBalancedChr(")a + b)", "(", ")");        // false (close bracket first)
isBalancedChr("((a + b)", "(", ")");       // false (unclosed bracket)
isBalancedChr("<div></div>", "<", ">");    // true
```

**Note:** `chr1` and `chr2` must be single characters. For validating balanced multi-character sequences, use `isBalancedStr`.

---

### Array Functions 

#### `is.isArr`
Determines if a variable is an Array.

```js
is.isArr([1, 2, 3]); // true
is.isArr({});        // false
```
[Back to Reference](#reference)

---

## See Also...

- [**parse-number** &mdash; A numeric sanitizer that fixes Number() edge cases, and allows for percentage](https://github.com/ChrisCodesThings/color-utils "A numeric sanitizer that fixes Number() edge cases, and allows for percentage")
- [**color-utils** &mdash; A collection of lightweight utilities for color identification, conversion, and simple manipulation](https://github.com/ChrisCodesThings/color-utils "A collection of lightweight utilities for color identification, conversion, and simple manipulation")

## License

MIT © ChrisCodesThings