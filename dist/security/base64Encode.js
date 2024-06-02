"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64Encode = void 0;
const base64Encode = (data) => {
    return Buffer.from(data).toString('base64');
};
exports.base64Encode = base64Encode;
