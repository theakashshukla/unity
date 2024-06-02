"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryString = void 0;
const buildQueryString = (params) => {
    return '?' + Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
};
exports.buildQueryString = buildQueryString;
