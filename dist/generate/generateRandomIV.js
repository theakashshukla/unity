"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomIV = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateRandomIV = () => {
    return crypto_1.default.randomBytes(16);
};
exports.generateRandomIV = generateRandomIV;
