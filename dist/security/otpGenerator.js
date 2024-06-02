"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.generateOTP = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateOTP = (length = 6) => {
    const otp = crypto_1.default.randomBytes(length).toString('hex').slice(0, length);
    return otp.toUpperCase(); // To ensure the OTP is in a standard format
};
exports.generateOTP = generateOTP;
const verifyOTP = (inputOTP, generatedOTP) => {
    return inputOTP === generatedOTP;
};
exports.verifyOTP = verifyOTP;
