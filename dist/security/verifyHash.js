"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const verifyHash = (password, hash) => crypto_1.default.createHash('sha256').update(password).digest('hex') === hash;
exports.verifyHash = verifyHash;
