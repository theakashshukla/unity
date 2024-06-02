"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (date, format) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};
exports.formatDate = formatDate;
