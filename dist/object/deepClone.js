"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.deepClone = deepClone;
