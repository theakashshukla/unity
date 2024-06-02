"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomHex = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateRandomHex = (length) => {
    return crypto_1.default.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
exports.generateRandomHex = generateRandomHex;
