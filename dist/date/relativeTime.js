"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relativeTime = void 0;
const units = [
    ['y', 31536000],
    ['m', 2592000],
    ['w', 604800],
    ['d', 86400],
    ['h', 3600],
    ['m', 60],
    ['s', 1],
];
const relativeTime = (timestamp) => {
    const now = Date.now();
    const targetTime = timestamp instanceof Date ? timestamp.getTime() : timestamp;
    const elapsed = Math.floor((now - targetTime) / 1000);
    for (const [unit, seconds] of units) {
        const interval = Math.floor(elapsed / seconds);
        if (interval >= 1) {
            return `${interval}${unit} ago`;
        }
    }
    return 'just now';
};
exports.relativeTime = relativeTime;
