"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryString = void 0;
const parseQueryString = (url) => {
    const queryString = url.split('?')[1] || '';
    return queryString.split('&').reduce((acc, pair) => {
        const [key, value] = pair.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
        return acc;
    }, {});
};
exports.parseQueryString = parseQueryString;
