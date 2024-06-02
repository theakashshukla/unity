"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aesEncrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const aesEncrypt = (text, key, iv) => {
    const cipher = crypto_1.default.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};
exports.aesEncrypt = aesEncrypt;
