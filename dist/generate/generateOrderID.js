"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOrderID = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateOrderID = (userPrefix, length = 6, useHyphen = true, includeTimestamp = true) => {
    const timestamp = includeTimestamp ? Date.now().toString(36).toUpperCase() : '';
    const randomPart = crypto_1.default.randomBytes(Math.ceil(length / 2)).toString('hex').toUpperCase().slice(0, length);
    const parts = [userPrefix, timestamp, randomPart].filter(part => part);
    return parts.join(useHyphen ? '-' : '');
};
exports.generateOrderID = generateOrderID;
