"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
exports.addDays = addDays;
