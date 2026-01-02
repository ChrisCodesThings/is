import { describe, it, expect } from 'vitest';
import * as is from '../src/is.js';

describe('is', () => {
    describe('str', () => {
        it('should return true for strings', () => {
            expect(is.str('hello')).toBe(true);
            expect(is.str('')).toBe(true);
            expect(is.str(String('hello'))).toBe(true);
            expect(is.str(new String('hello'))).toBe(true);
        });

        it('should return false for non-strings', () => {
            expect(is.str(123)).toBe(false);
            expect(is.str(null)).toBe(false);
            expect(is.str({})).toBe(false);
        });
    });

    describe('arr', () => {
        it('should return true for arrays', () => {
            expect(is.arr([])).toBe(true);
            expect(is.arr([1, 2, 3])).toBe(true);
            expect(is.arr(new Array(3))).toBe(true);
        });

        it('should return false for non-arrays', () => {
            expect(is.arr({})).toBe(false);
            expect(is.arr('[]')).toBe(false);
            expect(is.arr(null)).toBe(false);
        });
    });

    describe('num', () => {
        it('should return true for valid numbers', () => {
            expect(is.num(0)).toBe(true);
            expect(is.num(123)).toBe(true);
            expect(is.num(-123)).toBe(true);
            expect(is.num(123.456)).toBe(true);
        });

        it('should return false for non-numbers', () => {
            expect(is.num('123')).toBe(false); // Number as string
            expect(is.num(true)).toBe(false);
            expect(is.num([])).toBe(false);
            expect(is.num(NaN)).toBe(false);
        });

        it('should return false for edge cases', () => {
            expect(is.num('')).toBe(false);    // Blank string edge case
            expect(is.num([1])).toBe(false);   // Single index array edge case
            expect(is.num(Infinity)).toBe(false);  // Infinity isn't really a usable number
            expect(is.num(-Infinity)).toBe(false); // Infinity isn't really a usable number
            expect(is.num(Symbol('sym'))).toBe(false); // Symbols throw in Number()
        });
    });

    describe('int', () => {
        it('should return true for whole numbers', () => {
            expect(is.int(0)).toBe(true);
            expect(is.int(123)).toBe(true);
            expect(is.int(-123)).toBe(true);
        });

        it('should return false for non-integers', () => {
            expect(is.int(123.456)).toBe(false);
        });

        it('should return false for edge cases', () => {
            expect(is.int(Symbol('sym'))).toBe(false); // Symbols throw in Number()
        });
    });
});