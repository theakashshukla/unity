"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
