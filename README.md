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

## Install / Usage

```sh
npm install --save @chriscodesthings/is
```

## Usage

### Namespace
```js
import * as is from '@chriscodesthings/is';

if (is.isStr("hello world!")) {
    console.log("This is a string.");
}
```

### Named Imports
```js
import { isNum, isStr, ... } from '@chriscodesthings/is';

if (isStr("hello world!")) {
    console.log("This is a string.");
}
```

---

## Reference

| Function | Description |
| :--- | :--- |
| [`is.isStr(x)`](#isisstr) | Checks if a value is a string. |
| [`is.isNum(x)`](#isisnum) | Checks if a value is a finite number. |
| [`is.isArr(x)`](#isisarr) | Checks if a value is an array. |
| [`is.isInt(x)`](#isisint) | Checks if a value is an integer. |
| [`is.isHexColor(x)`](#isishexcolor) | Checks if a value is a valid Hex color. |

## Functions

### `is.isStr`
Checks if a variable is a string or a String object.

```js
is.isStr('hello'); // true
is.isStr(123);     // false
```
[Back to Reference](#reference)

---

### `is.isNum`
Checks if a variable is a finite number.

```js
is.isNum(42);  // true
is.isNum(NaN); // false
```
[Back to Reference](#reference)

---

### `is.isArr`
Determines if a variable is an Array.

```js
is.isArr([1, 2, 3]); // true
is.isArr({});        // false
```
[Back to Reference](#reference)

---

### `is.isInt`
Checks if a variable is a mathematical integer.

```js
is.isInt(42);  // true
is.isInt(42.5); // false
```
[Back to Reference](#reference)

---

### `is.isHexColor`
Validates if a string is a valid CSS Hexadecimal color.

```js
is.isHexColor('#fff');       // true
is.isHexColor('#ff0000ff');  // true
is.isHexColor('blue');       // false
```
[Back to Reference](#reference)

---

## See Also...

- [**color-utils**: A collection of lightweight utilities for color identification, conversion, and simple manipulation](https://github.com/ChrisCodesThings/color-utils "A collection of lightweight utilities for color identification, conversion, and simple manipulation")

## License

MIT © ChrisCodesThings