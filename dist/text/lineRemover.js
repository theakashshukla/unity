"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineRemover = void 0;
const lineRemover = (text) => text.replace(/\n+/g, '');
exports.lineRemover = lineRemover;
