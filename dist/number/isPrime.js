"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
const isPrime = (num) => {
    if (num <= 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
