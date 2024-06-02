"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFloat = void 0;
const randomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.randomFloat = randomFloat;
