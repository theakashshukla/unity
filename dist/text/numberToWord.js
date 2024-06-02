"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToWord = void 0;
const numberToWord = (numbers) => {
    const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return numbers.map(number => numberWords[number] || number.toString()).join(' ');
};
exports.numberToWord = numberToWord;
