"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSerialNumber = void 0;
const generateSerialNumber = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let serial = '';
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        serial += chars[randomIndex];
    }
    return serial;
};
exports.generateSerialNumber = generateSerialNumber;
