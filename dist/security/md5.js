"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5 = void 0;
const crypto_1 = __importDefault(require("crypto"));
const md5 = (data) => {
    return crypto_1.default.createHash('md5').update(data).digest('hex');
};
exports.md5 = md5;
