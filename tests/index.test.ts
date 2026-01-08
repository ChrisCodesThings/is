import { describe, it, expect } from 'vitest';
import * as is from '../src/index.js';
import { isBalancedChr } from '../src/index.js';

describe('is', () => {
    describe('everythingElse', () => {
        describe('arr', () => {
            it('should return true for arrays', () => {
                expect(is.isArr([])).toBe(true);
                expect(is.isArr([1, 2, 3])).toBe(true);
                expect(is.isArr(new Array(3))).toBe(true);
            });

            it('should return false for non-arrays', () => {
                expect(is.isArr({})).toBe(false);
                expect(is.isArr('[]')).toBe(false);
                expect(is.isArr(null)).toBe(false);
            });
        });
    });

    describe('number', () => {
        describe('num', () => {
            it('should return true for valid numbers', () => {
                expect(is.isNum(0)).toBe(true);
                expect(is.isNum(123)).toBe(true);
                expect(is.isNum(-123)).toBe(true);
                expect(is.isNum(123.456)).toBe(true);
            });

            it('should return true for different notations', () => {
                expect(is.isNum(0b101)).toBe(true);   // Binary
                expect(is.isNum(0o777)).toBe(true);   // Octal
                expect(is.isNum(0xFF)).toBe(true);    // Hex
                expect(is.isNum(1e5)).toBe(true);     // Scientific
            });

            it('should return true for special numeric values', () => {
                expect(is.isNum(Number.MAX_SAFE_INTEGER)).toBe(true);
                expect(is.isNum(Number.MIN_SAFE_INTEGER)).toBe(true);
                expect(is.isNum(Number.EPSILON)).toBe(true);
                expect(is.isNum(Number.MAX_VALUE)).toBe(true);
                expect(is.isNum(Number.MIN_VALUE)).toBe(true);
            });

            it('should return false for non-numbers', () => {
                expect(is.isNum(null)).toBe(false);
                expect(is.isNum(undefined)).toBe(false);
                expect(is.isNum('123')).toBe(false); // Number as string
                expect(is.isNum(true)).toBe(false);
                expect(is.isNum([])).toBe(false);
                expect(is.isNum(10n)).toBe(false);   // BigInt
                expect(is.isNum(NaN)).toBe(false);
            });

            it('should return false for edge cases', () => {
                expect(is.isNum('')).toBe(false);    // Blank string edge case
                expect(is.isNum([1])).toBe(false);   // Single index array edge case
                expect(is.isNum(Infinity)).toBe(false);  // Infinity isn't really a usable number
                expect(is.isNum(-Infinity)).toBe(false); // Infinity isn't really a usable number
                expect(is.isNum(Symbol('sym'))).toBe(false); // Symbols throw in Number()
            });
        });

        describe('int', () => {
            it('should return true for whole numbers', () => {
                expect(is.isInt(0)).toBe(true);
                expect(is.isInt(123)).toBe(true);
                expect(is.isInt(-123)).toBe(true);
            });

            it('should return false for non-integers', () => {
                expect(is.isInt(123.456)).toBe(false);
            });

            it('should return false for edge cases', () => {
                expect(is.isInt(Symbol('sym'))).toBe(false); // Symbols throw in Number()
            });
        });

        describe('isPct', () => {
            it('should return true for valid percentage strings', () => {
                expect(is.isPct('100%')).toBe(true);
                expect(is.isPct('50.5%')).toBe(true);
                expect(is.isPct('0%')).toBe(true);
                expect(is.isPct('-10%')).toBe(true);
            });

            it('should return false for invalid values', () => {
                expect(is.isPct('100')).toBe(false);
                expect(is.isPct('abc%')).toBe(false);
            });
        });
    });

    describe('string', () => {
        describe('str', () => {
            it('should return true for strings', () => {
                expect(is.isStr('hello')).toBe(true);
                expect(is.isStr('')).toBe(true);
                expect(is.isStr(String('hello'))).toBe(true);
                expect(is.isStr(new String('hello'))).toBe(true);
            });

            it('should return false for non-strings', () => {
                expect(is.isStr(123)).toBe(false);
                expect(is.isStr(null)).toBe(false);
                expect(is.isStr({})).toBe(false);
            });
        });

        describe('hexColor', () => {
            it('should return true for valid hex colors', () => {
                expect(is.isHexColor('#fff')).toBe(true);
                expect(is.isHexColor('#000000')).toBe(true);
            });

            it('should handle alpha channels (4 and 8 digits)', () => {
                expect(is.isHexColor('#f0f0')).toBe(true);
                expect(is.isHexColor('#ff0000ff')).toBe(true);
            });

            it('should return false for invalid strings', () => {
                expect(is.isHexColor('fff')).toBe(false); // No #
                expect(is.isHexColor('ff0000ff')).toBe(false); // No #
                expect(is.isHexColor('#ggg')).toBe(false); // Invalid chars
                expect(is.isHexColor('xyz')).toBe(false); // Invalid chars
                expect(is.isHexColor('12345')).toBe(false); // Invalid length
                expect(is.isHexColor('#ff')).toBe(false); // Invalid length
            });
        });

        describe('isBalancedChr', () => {
            it('should return true for balanced brackets', () => {
                expect(isBalancedChr('(a + b)', '(', ')')).toBe(true);
                expect(isBalancedChr('((a))', '(', ')')).toBe(true);
                expect(isBalancedChr('()', '(', ')')).toBe(true);
                expect(isBalancedChr('', '(', ')')).toBe(true);
                expect(isBalancedChr('a', '(', ')')).toBe(true);
            });

            it('should return false for unbalanced brackets', () => {
                expect(isBalancedChr('(a', '(', ')')).toBe(false);
                expect(isBalancedChr(')a(', '(', ')')).toBe(false);
                expect(isBalancedChr('((a)', '(', ')')).toBe(false);
                expect(isBalancedChr('a)', '(', ')')).toBe(false);
                expect(isBalancedChr(')(', '(', ')')).toBe(false);
            });

            it('should work with other characters', () => {
                expect(isBalancedChr('<div />', '<', '>')).toBe(true);
                expect(isBalancedChr('[array]', '[', ']')).toBe(true);
            });
        });
    });
});
