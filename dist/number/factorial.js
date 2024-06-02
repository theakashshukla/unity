"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
const factorial = (num) => {
    if (num <= 1)
        return 1;
    return num * (0, exports.factorial)(num - 1);
};
exports.factorial = factorial;
