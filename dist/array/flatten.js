"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
const flatten = (arr) => {
    return arr.reduce((acc, val) => acc.concat(val), []);
};
exports.flatten = flatten;
