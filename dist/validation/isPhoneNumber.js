"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneNumber = void 0;
const isPhoneNumber = (phone) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
};
exports.isPhoneNumber = isPhoneNumber;
