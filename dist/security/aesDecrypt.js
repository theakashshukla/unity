"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aesDecrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const aesDecrypt = (iv, encryptedData, key) => {
    const decipher = crypto_1.default.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};
exports.aesDecrypt = aesDecrypt;
