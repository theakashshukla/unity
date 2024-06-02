"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordToNumber = void 0;
const wordToNumber = (text) => {
    const words = text.split(/\s+/);
    return words.map(word => word.length);
};
exports.wordToNumber = wordToNumber;
