"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomSerial = void 0;
const generateCustomSerial = (prefix, length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let serial = prefix;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        serial += chars[randomIndex];
    }
    return serial;
};
exports.generateCustomSerial = generateCustomSerial;
