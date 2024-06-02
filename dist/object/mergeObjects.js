"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjects = void 0;
const mergeObjects = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
exports.mergeObjects = mergeObjects;
