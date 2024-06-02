"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexConverter = void 0;
const hexConverter = (text) => text.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
exports.hexConverter = hexConverter;
