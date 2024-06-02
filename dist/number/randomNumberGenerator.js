"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumberGenerator = void 0;
const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomNumberGenerator = randomNumberGenerator;
