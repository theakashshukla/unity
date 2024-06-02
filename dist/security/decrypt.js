"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const algorithm = 'aes-256-cbc';
const key = crypto_1.default.randomBytes(32);
const decrypt = (iv, encryptedData) => {
    const decipher = crypto_1.default.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};
exports.decrypt = decrypt;
