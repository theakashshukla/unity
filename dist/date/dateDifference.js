"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateDifference = void 0;
const dateDifference = (date1, date2) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
exports.dateDifference = dateDifference;
