"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryConverter = void 0;
const binaryConverter = (text) => text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
exports.binaryConverter = binaryConverter;
