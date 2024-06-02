"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Decode = void 0;
const base64Decode = (data) => {
    return Buffer.from(data, 'base64').toString('utf-8');
};
exports.base64Decode = base64Decode;
