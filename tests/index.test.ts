import { describe, it, expect } from 'vitest';
import { isStr, isArr, isNum } from '../src/is.js';

describe('is', () => {
    describe('isStr', () => {
        it('should return true for strings', () => {
            expect(isStr('hello')).toBe(true);
            expect(isStr('')).toBe(true);
            expect(isStr(String('hello'))).toBe(true);
            expect(isStr(new String('hello'))).toBe(true);
        });

        it('should return false for non-strings', () => {
            expect(isStr(123)).toBe(false);
            expect(isStr(null)).toBe(false);
            expect(isStr({})).toBe(false);
        });
    });

    describe('isArr', () => {
        it('should return true for arrays', () => {
            expect(isArr([])).toBe(true);
            expect(isArr([1, 2, 3])).toBe(true);
            expect(isArr(new Array(3))).toBe(true);
        });

        it('should return false for non-arrays', () => {
            expect(isArr({})).toBe(false);
            expect(isArr('[]')).toBe(false);
            expect(isArr(null)).toBe(false);
        });
    });

    describe('isNum', () => {
        it('should return true for valid numbers', () => {
            expect(isNum(0)).toBe(true);
            expect(isNum(123)).toBe(true);
            expect(isNum(-123)).toBe(true);
            expect(isNum(123.456)).toBe(true);
        });

        it('should return false for non-numbers', () => {
            expect(isNum('123')).toBe(false); // Number as string
            expect(isNum(true)).toBe(false);
            expect(isNum([])).toBe(false);
            expect(isNum(NaN)).toBe(false);
        });

        it('should return false for edge cases', () => {
            expect(isNum('')).toBe(false);    // Blank string edge case
            expect(isNum([1])).toBe(false);   // Single index array edge case
            expect(isNum(Infinity)).toBe(false);  // Infinity isn't really a usable number
            expect(isNum(-Infinity)).toBe(false); // Infinity isn't really a usable number
            expect(isNum(Symbol('sym'))).toBe(false); // Symbols throw in Number()
        });
    });
});