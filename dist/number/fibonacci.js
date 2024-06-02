"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
const fibonacci = (num) => {
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
};
exports.fibonacci = fibonacci;
